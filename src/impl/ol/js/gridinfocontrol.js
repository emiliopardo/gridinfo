/**
 * @module M/impl/control/GridinfoControl
 */
export default class GridinfoControl extends M.impl.Control {
  /**
   * This function adds the control to the specified map
   *
   * @public
   * @function
   * @param {M.Map} map to add the plugin
   * @param {HTMLElement} html of the plugin
   * @api stable
   */
  addTo(map, html) {
    // super addTo - don't delete
    super.addTo(map, html);
  }

  getTarget(map){
    const olMap = map.getMapImpl();
    return olMap.values_.target;
  }
}
