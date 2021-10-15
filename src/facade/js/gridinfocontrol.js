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
    this.layer = this.config.layer;
    this.url = null;
    this.map_ = this.map
    this.zoom = this.config.zoom;
    this.info = this.config.info;
    this.geoJSON = null;
    this.popup = null;
    this.start = null;
    this.totalFeatures = null;
    this.batchsize = 100;
    this.limit = 1000;
    this.polygonStyle = new M.style.Polygon({
      fill: {
        color: '#ffffff',
        opacity: 0.1,
      },
      stroke: {
        color: '#cdcdcd',
        width: 1.5
      }
    });

    this.polygonSelectedStyle = new M.style.Polygon({
      fill: {
        color: '#ffffff',
        opacity: 0.1,
      },
      stroke: {
        color: '#FFFF00',
        width: 3
      }
    });
    this.vectorLayer = new M.layer.GeoJSON({
      name: 'vectorLayer',
      source: {
        crs: {
          properties: {
            name: "EPSG:25830"
          },
          type: "name"
        },
        features: [],
        type: "FeatureCollection"
      },
      //extract: false,
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
    let zoom;
    this.map_.on(M.evt.COMPLETED, () => {
      this.map_.getMapImpl().on('moveend', () => {
        this.vectorLayer.clear();
        this.start = 0;
        this.totalFeatures = 0;
        zoom = this.map_.getZoom();
        if (zoom >= this.zoom) {
          this.bbox = this.map_.getBbox();
          this.bboxFilter = this.setCQLBboxFiler(this.bbox)
          this.url = encodeURI(this.wfsUrl + 'service=WFS&version=2.0.0&request=GetFeature&typeName=' + this.layer + '&CQL_FILTER='+this.fieldsFilter+' AND '+this.bboxFilter+'&propertyName='+this.propertyNames+'&outputFormat=application/json');
          this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);
        }
      });
    });

    this.map_.on(M.evt.ADDED_WMS, () => {
      this.selectedGrid = this.getLoadedGridWMS();
      if (this.selectedGrid) {
        this.gridInfoFields= this.setGridFieldInfo(this.selectedGrid)
        this.fieldsFilter = this.setCQLFieldsFilter(this.gridInfoFields);
        this.propertyNames = this.setPropertyNames(this.gridInfoFields);
      } else {
        console.log('no hay')
      }
    })
  }

  getLoadedGridWMS() {
    let find = false;
    let layers = this.map_.getLayers();
    let selectedGrid = null
    do {
      for (let index = 0; index < layers.length; index++) {
        const layer = layers[index];
        if (layer instanceof M.layer.WMS) {
          selectedGrid = (layer.options.styles)

        }
        if (index == layers.length - 1) {
          find = true;
        }
      }
    } while (!find);
    return selectedGrid
  }


  setGridFieldInfo(selectedGrid) {
    let find = false
    let gridInfoFields = null
    do {
      for (let index = 0; index < this.info.length; index++) {
        const element = this.info[index];
        if (element.style == selectedGrid){
          gridInfoFields =  element.fields
        }
        if (index == this.info.length - 1) {
          find = true;
        }   
      }   
    } while (!find);
    return gridInfoFields
  }

  incrementalLoad(vectorLayer, url, start, batchsize, totalFeatures, limit) {
    // Si es la primera ejecucion o si aun no las hemos cargado todas
    if ((this.totalFeatures == 0) || (this.vectorLayer.getFeatures().length < this.totalFeatures)) {
      // Para no pasarnos si hay limite definido
      if (this.start + this.batchsize > this.limit) {
        this.batchsize = this.limit - this.start;
      }
      M.remote.get(url + "&STARTINDEX=" + this.start + "&COUNT=" + this.batchsize).then((res) => {
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
          geom.type = "Polygon";
          let coord = geom.coordinates[0];
          geom.coordinates = coord;
          newFeat.setGeometry(geom);
          newFeat.setStyle(this.polygonStyle);
          features.push(newFeat);
        });

        this.start = this.start + this.batchsize;

        this.vectorLayer.addFeatures(features);
        // Si aun faltan features por cargar, iteramos
        if (this.vectorLayer.getFeatures().length < this.totalFeatures) {
          this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);
        }

        this.vectorLayer.on(M.evt.HOVER_FEATURES, (feature) => {
          this.selectedDataShow(feature[0]);
        });

        this.vectorLayer.on(M.evt.LEAVE_FEATURES, (feature) => {
          feature[0].setStyle(this.polygonStyle);
          this.selectedDataHide();
        });
      });
    }
  }

  setInfoPopUp(feature) {
    let gridCenter = this.getPolygonCenter(feature.getGeometry())
    let coordenada_X = gridCenter[0];
    let coordenada_Y = gridCenter[1];
    let myContent =
      "<table><tr><td class='info-popup-value'>" + feature.getAttribute('ctotal') + "</td></tr></table>";
    let featureTabOpts = {
      icon: "g-cartografia-pin",
      title: "Información",
      content: myContent,
    };
    this.popup = new M.Popup({ panMapIfOutOfView: false });
    this.popup.addTab(featureTabOpts);
    this.map_.addPopup(this.popup, [coordenada_X, coordenada_Y]);
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
    this.map_.removePopup(this.popup)
  }

  setCQLBboxFiler(bbox){
    return 'BBOX(geom,' + bbox.x.min + ',' + bbox.y.min + ',' + bbox.x.max + ',' + bbox.y.max + ')';
  }

  setCQLFieldsFilter(gridInfoFields){
    let filter = null;
    for (let index = 0; index < gridInfoFields.length; index++) {
      const field = gridInfoFields[index]; 
      if  (index==0){
        filter =field.field+'>'+field.minValue; 
      }else{
        filter+=' AND '+field.field+'>'+field.minValue
      }
    }  
      return filter
  }

  setPropertyNames(gridInfoFields){
    let properties= null;
    for (let index = 0; index < gridInfoFields.length; index++) {
      const field = gridInfoFields[index];  
      if  (index==0){
        properties =field.field 
      }else{
        properties+=','+field.field
      }
    }
    properties+=',geom'
    return properties
  }
}
