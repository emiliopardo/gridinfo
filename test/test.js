import Gridinfo from 'facade/gridinfo';

// definición raster layers capas bases

const ortofoto2016_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_rgb',
  legend: 'Ortofotografía Color 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

ortofoto2016_color.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_color.png')

const ortofoto2016_pancromatica = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_pancromatico',
  legend: 'Ortofotografía Pancromática 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

ortofoto2016_pancromatica.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_pancromatico.png');

const ortofoto2016_infrarrojo = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_infrarrojo',
  legend: 'Ortofotografía Infrarrojo 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

ortofoto2016_infrarrojo.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_infrarrojo.png');


const mdt_siose2013 = new M.layer.WMS({
  url: 'https://www.ideandalucia.es/wms/siose_2013?',
  name: 'sombreado_siose_2013',
  legend: 'Siose + MDT 2013',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

mdt_siose2013.setLegendURL('https://www.ideandalucia.es/visor/leyendas/siose_2013.png');

const mdt_2016 = new M.layer.WMS({
  url: 'https://www.ideandalucia.es/wms/mdt_2016?',
  name: 'sombreado_orografico_2016,modelo_digital_terreno_2016_color',
  legend: 'MDT 2016',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

mdt_2016.setLegendURL('https://www.ideandalucia.es/visor/leyendas/mdt_2016_tintas_hipsometricas.png');

const CDAU_Base = new M.layer.WMS({
  url: 'https://www.callejerodeandalucia.es/servicios/base/wms?',
  name: 'CDAU_base',
  legend: 'Base Cartográfica Callejero Digital de Andalucía',
  transparent: false,
  tiled: true
})

CDAU_Base.setLegendURL('https://www.ideandalucia.es/visor/leyendas/cdau_base.png');

const MapaAndalucia = new M.layer.WMS({
  url: 'https://www.ideandalucia.es/services/andalucia/wms?',
  name: '00_Mapa_Andalucia',
  legend: 'Mapa Topográfico de Andalucía',
  transparent: false,
  tiled: true
})

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


// definición Mapea
const map = M.map({
  container: 'mapjs',
  layers: [ortofoto2016_color,
    ortofoto2016_pancromatica,
    ortofoto2016_infrarrojo,
    mdt_siose2013,
    mdt_2016,
    CDAU_Base,
    MapaAndalucia],
  maxExtent: [100401, 3987100, 621273, 4288700],
  projection: 'EPSG:25830*m',
});
// Se añaden controles
map.addControls(['ScaleLine', 'Mouse', 'panzoombar']);

map.addControls(new M.control.GetFeatureInfo(
  'html',
  { buffer: 50 }));




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

//config baseLayers
const configSimpleBaseLayerSelector = { displayBaseLayersInLayerSwitcher: false }


//config plugin gridinfo

const configGridInfo = {
  wfsUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wfs?',
  layer: 'gridcattp_250',
  zoom: 6,
  info: [
    {
      style: 'stl_c011_viviendas_colectivas',
      fields: [
        {
          minValue: 0,
          field: 'c011',
          title: 'Viviendas colectivas. Urbano',
        },
        {
          minValue: 0,
          field: 'c012',
          title: 'Viviendas unifamiliares. Urbano',
        }
      ]
    },
    {
      style: 'stl_c012_viviendas_unifamiliares',
      fields: [
        {
          minValue: 0,
          field: 'c012',
          title: 'Viviendas unifamiliares. Urbano',
        }
      ]
    },
    {
      style: 'stl_c013_edificiacion_rural',
      fields: [
        {
          minValue: 0,
          field: 'c013',
          title: 'Edificación rural',
        }
      ]
    },
    {
      style: 'stl_c01G_garages_viviendas',
      fields: [
        {
          minValue: 0,
          field: 'c01g',
          title: 'Garajes viviendas',
        }
      ]
    },
    {
      style: 'stl_c022_otros_garajes',
      fields: [
        {
          minValue: 0,
          field: 'c022',
          title: 'Otros garajes y aparcamientos',
        }
      ]
    },
    {
      style: 'stl_c02_industrial',
      fields: [
        {
          minValue: 0,
          field: 'c02',
          title: 'Industrial',
        }
      ]
    },
    {
      style: 'stl_c03_oficinas',
      fields: [
        {
          minValue: 0,
          field: 'c03',
          title: 'Oficinas',
        }
      ]
    },
    {
      style: 'stl_c04_comercio',
      fields: [
        {
          minValue: 0,
          field: 'c04',
          title: 'Comercio',
        }
      ]
    },
    {
      style: 'stl_c05_Deportes',
      fields: [
        {
          minValue: 0,
          field: 'c05',
          title: 'Deportes',
        }
      ]
    },
    {
      style: 'stl_c05P_piscinas',
      fields: [
        {
          minValue: 0,
          field: 'c05p',
          title: 'Piscinas',
        }
      ]
    },
    {
      style: 'stl_c06_espectaculos',
      fields: [
        {
          minValue: 0,
          field: 'c06',
          title: 'Espectáculos',
        }
      ]
    },
    {
      style: 'stl_c07_hosteleria_ocio',
      fields: [
        {
          minValue: 0,
          field: 'c07',
          title: 'Hostelería y Ocio',
        }
      ]
    },
    {
      style: 'stl_c08_sanitarios_beneficos',
      fields: [
        {
          minValue: 0,
          field: 'c08',
          title: 'Sanitarios, asistenciales y benéficos',
        }
      ]
    },
    {
      style: 'stl_c09_culturales',
      fields: [
        {
          minValue: 0,
          field: 'c09',
          title: 'Culturales',
        }
      ]
    },
    {
      style: 'stl_c093_religioso',
      fields: [
        {
          minValue: 0,
          field: 'c093',
          title: 'Religiosos',
        }
      ]
    },
    {
      style: 'stl_c10_singulares',
      fields: [
        {
          minValue: 0,
          field: 'c10',
          title: 'Singulares',
        }
      ]
    },
    {
      style: 'stl_c1034_golf',
      fields: [
        {
          minValue: 0,
          field: 'c1034',
          title: 'Campos de Golf',
        }
      ]
    }
  ]
}


const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configTipologiasConstrucctivas);
const baseLayerSelector = new M.plugin.Simplebaselayerselector(configSimpleBaseLayerSelector);
const simpleLegend = new M.plugin.Simplelegend()

map.addPlugin(inputSelectAddLayer);
map.addPlugin(baseLayerSelector);
map.addPlugin(simpleLegend);

const mp = new Gridinfo(configGridInfo);
map.addPlugin(mp);

// Control carga Plugins

mp.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se carga plugin GridInfo')
})

baseLayerSelector.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin Simplebaselayerselector');
})

inputSelectAddLayer.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin Inputselectaddlayer');
})

simpleLegend.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin Simplelegend');
})
