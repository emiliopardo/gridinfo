import Gridinfo from 'facade/gridinfo';

// definición Mapea
const map = M.map({
  container: 'mapjs',
  maxExtent: [100401, 3987100, 621273, 4288700],
  projection: 'EPSG:25830*m',
});
// Se añaden controles
map.addControls(['ScaleLine', 'Mouse', 'panzoombar']);


//definicion layers


const viviendas_colectivas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Viviendas colectivas. Urbano',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c011_viviendas_colectivas'
})

viviendas_colectivas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c011_viviendas_colectivas')


const viviendas_unifamiliares = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Viviendas unifamiliares. Urbano',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c012_viviendas_unifamiliares'
})

viviendas_unifamiliares.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c012_viviendas_unifamiliares')

const edificiacion_rural = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Edificación rural',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c013_edificiacion_rural'
})

edificiacion_rural.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c013_edificiacion_rural')

const garages_viviendas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Garajes viviendas',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c01G_garages_viviendas'
})

garages_viviendas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c01G_garages_viviendas')

const otros_garajes = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Otros garajes y aparcamientos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c022_otros_garajes'
})

otros_garajes.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c022_otros_garajes')

const industrial = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Industrial',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c02_industrial'
})

industrial.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c02_industrial')

const oficinas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Oficinas',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c03_oficinas'
})

oficinas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c03_oficinas')

const comercio = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Comercio',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c04_comercio'
})

comercio.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c04_comercio')

const deporte = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Deportes',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c05_Deportes'
})

deporte.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c05_Deportes')

const piscinas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Piscinas',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c05P_piscinas'
})

piscinas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c05P_piscinas')

const espectaculos = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Espectáculos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c06_espectaculos'
})

espectaculos.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c06_espectaculos')

const hosteleria_ocio = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Hostelería y Ocio',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c07_hosteleria_ocio'
})

hosteleria_ocio.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c07_hosteleria_ocio')

const sanitarios_beneficos = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Sanitarios, asistenciales y benéficos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c08_sanitarios_beneficos'
})

sanitarios_beneficos.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c08_sanitarios_beneficos')

const culturales = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Culturales',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c09_culturales'
})

culturales.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c09_culturales')

const religiosos = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Religiosos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c093_religioso'
})

religiosos.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c093_religioso')

const singulares = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Singulares',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c10_singulares'
})

singulares.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c10_singulares')

const campo_golf = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Campos de Golf',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c1034_golf'
})

campo_golf.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c1034_golf')


// configuración plugin inputSelectAddLayer
const configTipologiasConstrucctivas = {
  title: 'Tipologías constructivas de catastro en malla estadística',
  label: 'Tipologías constructivas de catastro en malla estadística',
  group: false,
  data: {
    name: 'Tipologias Construcctivas',
    layers: [
      viviendas_colectivas,
      viviendas_unifamiliares,
      edificiacion_rural,
      garages_viviendas,
      otros_garajes,
      industrial,
      oficinas,
      comercio,
      deporte,
      piscinas,
      espectaculos,
      hosteleria_ocio,
      sanitarios_beneficos,
      culturales,
      religiosos,
      singulares,
      campo_golf
    ]
  }
}

//config plugin gridinfo

const configGridInfo = {
  wfsUrl:'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wfs?',
  layer: 'gridcattp_250',
  zoom: 9
}


const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configTipologiasConstrucctivas);
map.addPlugin(inputSelectAddLayer);

const mp = new Gridinfo(configGridInfo);
map.addPlugin(mp);

mp.on(M.evt.ADDED_TO_MAP,()=>{
  console.log('se carga plugin GridInfo')
})
