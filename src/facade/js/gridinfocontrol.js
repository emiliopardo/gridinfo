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
    this.oldZoom = null;
    this.newZoom = null;
    this.bbox = null;
    this.oldBbox = null;
    this.newBbox = null;
    this.geoJSON = null;
    this.start = null;
    this.totalFeatures = null;
    this.batchsize = 100;
    this.limit = 1000;
    this.polygonStyle = new M.style.Polygon({
      fill: {
        color: 'pink',
        opacity: 0,
      },
      stroke: {
        color: '#cdcdcd',
        width: 1.5
      }
   });
    this.vectorLayer = new M.layer.GeoJSON({
      name: 'Prueba',
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
    let zoom;
    this.map_.on(M.evt.COMPLETED, () => {
      this.map_.getMapImpl().on('moveend', () => {
        this.vectorLayer.clear();
        this.start = 0;
        this.totalFeatures = 0;
        zoom = this.map_.getZoom();
        if (zoom >= this.zoom) {
          this.bbox = this.map_.getBbox();
          console.log('hago la peticion')

          this.url = this.wfsUrl + 'service=WFS&version=2.0.0&request=GetFeature&typeName=' + this.layer + '&BBOX=' + this.bbox.x.min + ',' + this.bbox.y.min + ',' + this.bbox.x.max + ',' + this.bbox.y.max + '&outputFormat=application/json';
          this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);
        }
      });
    });
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
          let newFeat = new M.Feature(f.id, f);
          newFeat.setStyle(this.polygonStyle);
          features.push(newFeat);

        });

        this.start = this.start + this.batchsize;

        this.vectorLayer.addFeatures(features);
        // Si aun faltan features por cargar, iteramos
        if (this.vectorLayer.getFeatures().length < this.totalFeatures) {
          this.incrementalLoad(this.vectorLayer, this.url, this.start, this.batchsize, this.totalFeatures, this.limit);
        }
      });
    }
  }
}
