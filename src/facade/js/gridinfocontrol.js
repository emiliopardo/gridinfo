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
    this.startInfoZoom = this.config.zoom;
    this.map_=this.map
    this.bbox = null;
    // this.x_min = this.bbox.x.min;
    // this.y_min = this.bbox.y.min;
    // this.x_max = this.bbox.x.max;
    // this.y_max = this.bbox.y.max;
    this.x_min = null;
    this.y_min = null;
    this.x_max = null;
    this.y_max = null;
    this.geoJSON = null;
    console.log(config)
    console.log(this.wfsUrl)
    console.log(this.layer)
    console.log(this.startInfoZoom)

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

  addEvents(html){
    let actualZoom
    let newZoom 
    let targetId = this.getImpl().getTarget(this.map_)
    let panzoom = document.getElementsByClassName('m-panzoom')[0]
    let myMap = document.getElementById(targetId)

    panzoom.addEventListener('click',(event)=>{
      actualZoom = this.map_.getZoom()
      let target = event.target
      if (target.classList.contains('ol-zoom-in') ){
        newZoom = actualZoom+1
      }else if (target.classList.contains('ol-zoom-out') ){
        newZoom =actualZoom-1
      }
      if (this.checkZoom(newZoom)){
        this.bbox = this.map_.getBbox();
        this.loadLayer();
      }
    })

    myMap.addEventListener('wheel',(event)=>{
      actualZoom = this.map_.getZoom()
      if (event.deltaY < 0){
        newZoom =actualZoom+1
      }else if (event.deltaY > 0){
        newZoom =actualZoom-1
      }
      if (this.checkZoom(newZoom)){
        this.bbox = this.map_.getBbox();
        this.loadLayer();
      }
    })   
    
    myMap.addEventListener('click',(event)=>{
      this.checkBBox(this.map_.getBbox())
      if ((this.checkBBox(this.map_.getBbox())) && (this.checkZoom(this.map_.getZoom()))){
        this.bbox = this.map_.getBbox();
        this.loadLayer();
      }
    })    
  }

  checkBBox(bbox){
    let change = false;
    if ((this.x_min != bbox.x.min) || (this.y_min != bbox.y.min) || (this.x_max != bbox.x.max) || (this.y_max != bbox.y.max)) {
      change = true;
    }  
    return change;
  }

  checkZoom(newZoom){
    let valid = false;
    if(newZoom >= this.startInfoZoom){
      this.bbox =this.map_.getBbox();
      valid = true;
    }
    return valid;
  }

  loadLayer(){
    if(this.geoJSON){
      this.map_.removeLayers(this.geoJSON)
    } else {
      this.x_min = this.bbox.x.min;
      this.y_min = this.bbox.y.min;
      this.x_max = this.bbox.x.max;
      this.y_max = this.bbox.y.max;

      console.log(this.x_min)
      console.log(this.y_min)
      console.log(this.x_max)
      console.log(this.y_max)
      this.geoJSON  = new M.layer.GeoJSON({
        name: 'grid_250m', 
        url: this.wfsUrl+'service=WFS&version=1.0.0&request=GetFeature&typeName='+this.layer+'&BBOX='+this.x_min+','+this.y_min+','+this.x_max+','+this.y_max+'&outputFormat=application/json'
        });
      this.map_.addLayers(this.geoJSON);
    }
  }
}
