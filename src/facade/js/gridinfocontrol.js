/* eslint-disable no-console */
/**
 * @module M/control/GridinfoControl
 */

import GridinfoImplControl from 'impl/gridinfocontrol';
import template from 'templates/gridinfo';
export default class GridinfoControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor(config) {
    // 1. checks if the implementation can create PluginControl
    if (M.utils.isUndefined(GridinfoImplControl)) {
      M.exception('La implementación usada no puede crear controles GridinfoControl');
    }
    // 2. implementation of this control
    const impl = new GridinfoImplControl();
    super(impl, 'Gridinfo');
    this.config = config
    this.wfsUrl = this.config.wfsUrl;
    this.wmsUrl = this.config.wmsUrl;
    this.infoUrl = this.config.infoUrl;
    this.wfslayer = this.config.wfsLayer;
    this.infoLayer = this.config.infoLayer;
    this.wmsLayer = null;
    this.configFields = null;
    this.zoom = this.config.zoom;
    this.info = this.config.info;
    this.url = null;
    this.map_ = this.map
    this.geoJSON = null;
    this.popup = null;
    this.popupInfo = null;
    this.start = null;
    this.totalFeatures = null;
    this.batchsize = 100;
    this.limit = 1000;
    this.selectedFeature = null;
    this.getInfoFeature = null;
    this.getInfoQuery = false;

    this.polygonStyle = new M.style.Polygon({
      fill: {
        color: '#ffffff',
        opacity: 0,
      },
      stroke: {
        color: '#cdcdcd',
        width: 0.1
      }
    });

    this.polygonSelectedStyle = new M.style.Polygon({
      fill: {
        color: '#FFFFFF',
        opacity: 0,
      },
      stroke: {
        color: '#FFFF00',
        width: 4
      }
    });

    this.polygonSelectedStyle2 = new M.style.Polygon({
      fill: {
        color: '#FFFFFF',
        opacity: 0,
      },
      stroke: {
        color: '#FF0000',
        width: 4
      }
    });

    this.vectorLayer = new M.layer.GeoJSON({
      name: 'vectorLayer',
      source: {
        crs: {
          properties: {
            name: 'EPSG:25830'
          },
          type: 'name'
        },
        features: [],
        type: 'FeatureCollection'
      },
      extract: false,
    }, {
    }, {
      renderMode: 'image'
    });
  }


  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {
    return new Promise((success, fail) => {
      const html = M.template.compileSync(template);
      // Añadir código dependiente del DOM
      this.addEvents(html);
      success(html);
    });
  }

  /**
   * This function is called on the control activation
   *
   * @public
   * @function
   * @api stable
   */
  activate() {
    // calls super to manage de/activation
    super.activate();
  }
  /**
   * This function is called on the control deactivation
   *
   * @public
   * @function
   * @api stable
   */
  deactivate() {
    // calls super to manage de/activation
    super.deactivate();
  }
  /**
   * This function gets activation button
   *
   * @public
   * @function
   * @param {HTML} html of control
   * @api stable
   */
  getActivationButton(html) {
    return html.querySelector('.m-gridinfo button');
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   */
  equals(control) {
    return control instanceof GridinfoControl;
  }

  // Add your own functions

  addEvents(html) {
    this.map_.addLayers(this.vectorLayer);


    this.vectorLayer.on(M.evt.HOVER_FEATURES, (feature) => {
      if (!this.getInfoQuery) {
        this.selectedFeature = feature[0]
        this.selectedDataShow(feature[0])
      }
    });


    this.vectorLayer.on(M.evt.LEAVE_FEATURES, (feature) => {
      if (!this.getInfoQuery) {
        feature[0].setStyle(this.polygonStyle);
        this.selectedFeature = null;
        this.selectedDataHide();
      }
    });

    this.vectorLayer.on(M.evt.SELECT_FEATURES, (feature) => {
      this.getInfoFeature = feature[0];
      this.udpateStyle(this.vectorLayer.getFeatures());
    })

    let zoom;
    this.map_.on(M.evt.COMPLETED, () => {
      this.map_.getMapImpl().on('moveend', () => {
        this.vectorLayer.clear();
        this.start = 0;
        this.totalFeatures = 0;
        zoom = this.map_.getZoom();
        this.selectedGrid = this.getLoadedGridWMS(this.map_.getLayers());
        if (zoom >= this.zoom && this.selectedGrid) {
          this.gridInfoFields = this.setGridFieldInfo(this.selectedGrid)
          this.fieldsFilter = this.setCQLFieldsFilter(this.gridInfoFields);
          this.propertyNames = this.setPropertyNames(this.gridInfoFields);
          this.bbox = this.map_.getBbox();
          this.bboxFilter = this.setCQLBboxFiler(this.bbox)
          this.url = encodeURI(this.wfsUrl + 'service=WFS&version=2.0.0&request=GetFeature&typeName=' + this.wfsLayer + '&CQL_FILTER=' + this.fieldsFilter + ' AND ' + this.bboxFilter + '&propertyName=' + this.propertyNames + '&outputFormat=application/json');
          this.showLoader('Cargando datos');
          this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);
        }

        this.udpateStyle(this.vectorLayer.getFeatures());
      });
    });

    this.map_.on(M.evt.ADDED_WMS, () => {
      this.vectorLayer.clear();
      this.start = 0;
      this.totalFeatures = 0;
      zoom = this.map_.getZoom();
      this.selectedGrid = this.getLoadedGridWMS(this.map_.getLayers());
      if (zoom >= this.zoom && this.selectedGrid) {
        this.gridInfoFields = this.setGridFieldInfo(this.selectedGrid)
        this.fieldsFilter = this.setCQLFieldsFilter(this.gridInfoFields);
        this.propertyNames = this.setPropertyNames(this.gridInfoFields);
        this.bbox = this.map_.getBbox();
        this.bboxFilter = this.setCQLBboxFiler(this.bbox)
        this.url = encodeURI(this.wfsUrl + 'service=WFS&version=2.0.0&request=GetFeature&typeName=' + this.wfsLayer + '&CQL_FILTER=' + this.fieldsFilter + ' AND ' + this.bboxFilter + '&propertyName=' + this.propertyNames + '&outputFormat=application/json');
        this.showLoader('Cargando datos');
        this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);

      }
    })

    this.map_.on(M.evt.CLICK, (event) => {
      this.wmsLayer = this.getLoadedLayer(this.map_.getLayers());
      if (this.selectedFeature) {
        this.selectedFeature.setStyle(this.polygonStyle)
        this.getInfoQuery = true;
        this.udpateStyle(this.vectorLayer.getFeatures())
      }
      if (this.wmsLayer) {
        let mapClick = event.coord;
        let imageClick = event.pixel;
        let infoUrl = this.getInfoUrl(this.wmsLayer);
        let infoLayer = this.getInfoLayer(this.wmsLayer);
        let layerStyle = this.wmsLayer.options.styles;
        let mapBbox = this.map_.getBbox();
        let imageSize = this.map_.getImpl().map_.getSize()
        let getInfoUrl = infoUrl + 'request=GetFeatureInfo&service=WMS&version=1.1.1&layers=' + infoLayer + '&styles=' + layerStyle + '&srs=EPSG:25830&format=image/png&bbox=' + mapBbox.x.min + ',' + mapBbox.y.min + ',' + mapBbox.x.max + ',' + mapBbox.y.max + '&width=' + imageSize[0] + '&height=' + imageSize[1] + '&query_layers=' + infoLayer + '&info_format=text/html&feature_count=1&x=' + imageClick[0] + '&y=' + imageClick[1] + '&exceptions=application/vnd.ogc.se_xml';
        let myContent = this.createLoader('Consultando Información');
        let featureTabOpts = {
          icon: 'g-cartografia-pin',
          title: 'Información',
          content: myContent.innerHTML,
        };
        this.popupInfo = new M.Popup({ panMapIfOutOfView: true });
        this.popupInfo.addTab(featureTabOpts);
        this.map_.addPopup(this.popupInfo, [mapClick[0], mapClick[1]]);
        let popupContent = document.getElementsByClassName('m-body')[0];
        let closePopupButton = document.getElementsByClassName('m-popup-closer')[0]
        closePopupButton.addEventListener('click', () => {
          this.getInfoFeature = null;
          this.udpateStyle(this.vectorLayer.getFeatures())
          this.getInfoQuery = false;
        })

        M.remote.get(getInfoUrl).then((res) => {
          let response = res.text
          if (response.search('<table ') != -1) {
            popupContent.innerHTML = response;
          } else {
            popupContent.innerHTML = '<div class="info-msg">No ha seleccionado una celdilla</div>';
            this.getInfoFeature = null;
            this.getInfoQuery = false;
            setTimeout(() => {
              if (this.popupInfo) {
                this.map_.removePopup(this.popupInfo)
              }
            }, 500)

          }
          this.udpateStyle(this.vectorLayer.getFeatures())
        })
      }
    })
  }

  getLoadedLayer(layers) {
    let loadedLayer = null
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index];
      if (layer instanceof M.layer.WMS && this.isGridLayer(layer)) {
        loadedLayer = layer
      }
    }
    return loadedLayer
  }

  getLoadedGridWMS(layers) {
    let selectedGrid = null
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index];
      if (layer instanceof M.layer.WMS && this.isGridLayer(layer)) {
        selectedGrid = layer
      }
    }
    return selectedGrid
  }

  isGridLayer(layer) {
    let result = false;
    for (let index = 0; index < this.config.length; index++) {
      this.info = this.config[index];
      if (layer.getImpl().url == this.info.wmsUrl) {
        let info = this.info.info
        for (let index = 0; index < info.length; index++) {
          const element = info[index];
          if (layer.name == element.wmsLayer && element.style == layer.options.styles) {
            this.configFields = element;
            this.wmsLayer = layer;
            this.wfsUrl = this.info.wfsUrl;
            this.zoom = this.info.zoom;
            this.wfsLayer = this.info.wfsLayer
            this.infoLayer = this.info.infoLayer;
            result = true
          }
        }
      }
    }

    return result;
  }

  setGridFieldInfo(selectedGrid) {

    let gridInfoFields = this.configFields.fields

    return gridInfoFields
  }

  getInfoUrl(layer) {
    this.infoUrl = null;
    if (this.isGridLayer(layer)) {
      this.infoUrl = this.configFields.infoUrl;
    }
    return this.infoUrl
  }

  getInfoLayer(layer) {
    this.infoLayer = null;
    if (this.isGridLayer(layer)) {
      this.infoLayer = this.configFields.infoLayer;
    }
    return this.infoLayer

  }

  incrementalLoad(vectorLayer, url, start, batchsize, totalFeatures, limit) {
    // Si es la primera ejecucion o si aun no las hemos cargado todas
    if ((this.totalFeatures == 0) || (this.vectorLayer.getFeatures().length < this.totalFeatures)) {
      // Para no pasarnos si hay limite definido
      if (this.start + this.batchsize > this.limit) {
        this.batchsize = this.limit - this.start;
      }
      M.remote.get(url + '&STARTINDEX=' + this.start + '&COUNT=' + this.batchsize).then((res) => {
        let wfs = JSON.parse(res.text);
        this.totalFeatures = wfs.totalFeatures;
        // Si hay limite, tiene preferencia
        this.totalFeatures = (this.limit === undefined) ? wfs.totalFeatures : Math.min(this.limit, this.totalFeatures);
        let wfsFeatures = wfs.features;
        let features = [];

        wfsFeatures.forEach((f) => {
          // Se combierte de multipolygon a polygon
          let newFeat = new M.Feature(f.id, f);
          let geom = newFeat.getGeometry();
          geom.type = 'Polygon';
          let coord = geom.coordinates[0];
          geom.coordinates = coord;
          newFeat.setGeometry(geom);
          if (this.getInfoFeature && (newFeat.getId() == this.getInfoFeature.getId())) {
            newFeat.setStyle(this.polygonSelectedStyle2)
          } else {
            newFeat.setStyle(this.polygonStyle)
          }
          features.push(newFeat);
        });

        this.start = this.start + this.batchsize;
        this.vectorLayer.addFeatures(features);
        // Si aun faltan features por cargar, iteramos
        if (this.vectorLayer.getFeatures().length < this.totalFeatures) {
          this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);
          //console.log('faltan por cargar datos')
        } else {
          //console.log('se cargaron los datos')
          this.hideLoader()
        }
      });
    }
  }

  setInfoPopUp(feature) {
    let gridCenter = this.getPolygonCenter(feature.getGeometry())
    let coordenada_X = gridCenter[0];
    let coordenada_Y = gridCenter[1];
    let myContent = this.setInfoTable(feature)
    let featureTabOpts = {
      icon: 'g-cartografia-pin',
      title: 'Información',
      content: myContent,
    };
    this.popup = new M.Popup({ panMapIfOutOfView: false });
    this.popup.addTab(featureTabOpts);
    setTimeout(() => {
      this.map_.addPopup(this.popup, [coordenada_X, coordenada_Y]);
    }, 200);
  }

  getPolygonCenter(geometry) {
    let minPointX = geometry.coordinates[0][0][0]
    let minPointY = geometry.coordinates[0][0][1]
    let maxPointX = geometry.coordinates[0][2][0]
    let maxPointY = geometry.coordinates[0][2][1]
    let coor_x = ((maxPointX - minPointX) / 2) + minPointX
    let coor_y = ((maxPointY - minPointY) / 2) + minPointY
    return [coor_x, coor_y]
  }

  selectedDataShow(feature) {
    feature.setStyle(this.polygonSelectedStyle);
    this.setInfoPopUp(feature)
  }

  selectedDataHide() {
    if (!this.getInfoQuery) {
      this.map_.removePopup(this.popup)
    }
  }

  setCQLBboxFiler(bbox) {
    return 'BBOX(geom,' + bbox.x.min + ',' + bbox.y.min + ',' + bbox.x.max + ',' + bbox.y.max + ')';
  }

  setCQLFieldsFilter(gridInfoFields) {
    let filter = null;
    for (let index = 0; index < gridInfoFields.length; index++) {
      const field = gridInfoFields[index];
      if (index == 0) {
        filter = field.field + '>' + field.minValue;
      } else {
        filter += ' AND ' + field.field + '>=' + field.minValue
      }
    }
    return filter
  }

  setPropertyNames(gridInfoFields) {
    let properties = null;
    for (let index = 0; index < gridInfoFields.length; index++) {
      const field = gridInfoFields[index];
      if (index == 0) {
        properties = field.field
      } else {
        properties += ',' + field.field
      }
    }
    properties += ',geom'
    return properties
  }

  setInfoTable(feature) {
    let arrayFields = new Array()
    let total = null;
    let table = '<table class="info-table">'
    for (let index = 0; index < this.gridInfoFields.length; index++) {
      const element = this.gridInfoFields[index];
      if (element.title == 'TOTAL') {
        total = feature.getAttribute(element.field);
      } else if (feature.getAttribute(element.field) != 0) {
        arrayFields.push({ title: element.title, value: feature.getAttribute(element.field) })
      }
    }
    for (let index = 0; index < arrayFields.length; index++) {
      const element = arrayFields[index];
      if (element.value == -1) {
        table += '<tr><td class="info-popup-key">' + element.title + '</td><td class="info-popup-value">Secreto estadístico</td></tr>';
      } else {
        if(total){
        let value = ((element.value * 100) / total).toFixed(2) + '%';
        table += '<tr><td class="info-popup-key">' + element.title + '</td><td class="info-popup-value">' + value + '</td></tr>';
      }else{
        table += '<tr><td class="info-popup-key">' + element.title + '</td><td class="info-popup-value">' + element.value + '</td></tr>';
      }
      }
    }
    
    if(total){
      table += '<tr><td class="info-popup-key">TOTAL</td><td class="info-popup-value">' + total.toFixed(2) + '</td></tr>';
    }

    table += '</table>'
    return table
  }

  udpateStyle(features) {
    for (let index = 0; index < features.length; index++) {
      const feature = features[index];
      if (this.getInfoFeature && (feature.getId() == this.getInfoFeature.getId())) {
        feature.setStyle(this.polygonSelectedStyle2)
      } else {
        feature.setStyle(this.polygonStyle)
      }
    }
  }

  createLoader(msg) {
    let loader = document.createElement('div');
    loader.setAttribute('id', 'loader');
    loader.setAttribute('class', 'loader');
    let spinner = document.createElement('div');
    spinner.setAttribute('class', 'loader-spinner')

    let textLoader = document.createElement('div')
    textLoader.setAttribute('class', 'loader-text')
    let text = document.createTextNode(msg);
    textLoader.appendChild(text)
    loader.appendChild(spinner);
    loader.appendChild(textLoader);
    return loader
  }

  showLoader(msg) {
    let loader = this.createLoader(msg)
    const mapeaContainer = document.querySelector('div.m-mapea-container');
    mapeaContainer.appendChild(loader);
  }

  hideLoader() {
    let loader = document.getElementById('loader');
    loader.remove();
  }
}
