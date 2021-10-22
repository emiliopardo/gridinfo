import Gridinfo from 'facade/gridinfo';

// definición raster layers capas bases

const ortofoto2016_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_rgb',
  legend: 'Ortofotografía Color 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: ''
})

ortofoto2016_color.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_color.png')

const ortofoto2016_pancromatica = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_pancromatico',
  legend: 'Ortofotografía Pancromática 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: ''
})

ortofoto2016_pancromatica.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_pancromatico.png');

const ortofoto2016_infrarrojo = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_infrarrojo',
  legend: 'Ortofotografía Infrarrojo 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: ''
})

ortofoto2016_infrarrojo.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_infrarrojo.png');


const mdt_siose2013 = new M.layer.WMS({
  url: 'https://www.ideandalucia.es/wms/siose_2013?',
  name: 'sombreado_siose_2013',
  legend: 'Siose + MDT 2013',
  transparent: false,
  tiled: true
}, {
  styles: ''
})

mdt_siose2013.setLegendURL('https://www.ideandalucia.es/visor/leyendas/siose_2013.png');

const mdt_2016 = new M.layer.WMS({
  url: 'https://www.ideandalucia.es/wms/mdt_2016?',
  name: 'sombreado_orografico_2016,modelo_digital_terreno_2016_color',
  legend: 'MDT 2016',
  transparent: false,
  tiled: true
}, {
  styles: ''
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




//NACIONALIDAD

const nacionalidad_2019 = new M.layer.WMS({
  url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  name: 'nacionalidad_2019',
  legend: 'Población por nacionalidad',
  transparent: true,
  tiled: true
}, {
  styles: ''
})

nacionalidad_2019.setLegendURL('https://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/leyenda/nacionalidad.png')

const nacionalidad_2018 = new M.layer.WMS({
  url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  name: 'nacionalidad_2018',
  legend: 'Población por nacionalidad',
  transparent: true,
  tiled: true
}, {
  styles: ''
})

nacionalidad_2018.setLegendURL('https://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/leyenda/nacionalidad.png')

const nacionalidad_2017 = new M.layer.WMS({
  url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  name: 'nacionalidad_2017',
  legend: 'Población por nacionalidad',
  transparent: true,
  tiled: true
}, {
  styles: ''
})

nacionalidad_2017.setLegendURL('https://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/leyenda/nacionalidad.png')

// Seguridad social   
const segsoc_rellab_2019 = new M.layer.WMS({
  url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  name: 'segsoc_rellab_2019',
  legend: 'Afiliación según relación Laboral',
  transparent: true,
  tiled: true
}, {
  styles: ''
})

segsoc_rellab_2019.setLegendURL('https://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/leyenda/segsoc_rellab.png')

const segsoc_rellab_2018 = new M.layer.WMS({
  url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  name: 'segsoc_rellab_2018',
  legend: 'Afiliación según relación Laboral',
  transparent: true,
  tiled: true
}, {
  styles: ''
})

segsoc_rellab_2018.setLegendURL('https://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/leyenda/segsoc_rellab.png')

const segsoc_rellab_2017 = new M.layer.WMS({
  url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  name: 'segsoc_rellab_2017',
  legend: 'Afiliación según relación Laboral',
  transparent: true,
  tiled: true
}, {
  styles: ''
})

segsoc_rellab_2017.setLegendURL('https://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/leyenda/segsoc_rellab.png')


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

// configuración plugin inputSelectAddLayer
const configTipologiasConstructivas = {
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

const configGridPoblacion = {
  title: 'Distribución Espacial de la Población en Andalucía',
  label: 'Año',
  group: true,
  data: [
    {
      name: 'Año 2017',
      layerGroups: [
        {
          group: 'Población',
          layers: [
            nacionalidad_2017
          ]
        }
        ,
        {
          group: 'Afiliación a la Seguridad Social',
          layers: [
            segsoc_rellab_2017
          ]
        }
      ]
    },
    {
      name: 'Año 2018',
      layerGroups: [
        {
          group: 'Población',
          layers: [
            nacionalidad_2018
          ]
        },
        {
          group: 'Afiliación a la Seguridad Social',
          layers: [
            segsoc_rellab_2018
          ]
        }
      ]
    },
    {
      name: 'Año 2019',
      layerGroups: [
        {
          group: 'Población',
          layers: [
            nacionalidad_2019
          ]
        },
        {
          group: 'Afiliación a la Seguridad Social',
          layers: [
            segsoc_rellab_2019
          ]
        }
      ]
    }
  ]
}

//config baseLayers
const configSimpleBaseLayerSelector = { displayBaseLayersInLayerSwitcher: false }


const configFooterIECA = {
  open: true,
  htmlCode: '<div id="social"  title="Compartir"> <ul> <li class="no_imprimir"><a id="btnCompartir" href="#"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/compartir24g.png" border="0" alt="Compartir">&nbsp;<span>Compartir</span></a> <ul id="soc_compartir"> <li><a href="https://www.facebook.com/sharer.php?u=' + window.location.href + '&amp;t=+Visualizador+IECA&amp;d=" title="Compartir en Facebook" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png" border="0" alt="Compartir en Facebook">&nbsp;<span>Facebook</span></a></li><li><a href="https://twitter.com/home?status=Visualizador-' + window.location.href + '%20v%C3%ADa%20@IECA_Andalucia" title="Compartir en Twitter" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png" border="0" alt="Compartir en Twitter">&nbsp;<span>Twitter</span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=' + window.location.href + '&amp;title=+Visualizador+IECA" title="Compartir en LinkedIn" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_linkedin.png" border="0" alt="Compartir en LinkedIn">&nbsp;<span>LinkedIn</span></a></li><li><a href="mailto:?subject=Compartiendo%20por%20correo%20electr%C3%B3nico&amp;body=%20Visualizador:%0D%0A' + window.location.href + '" title="Compartir por correo electr&oacute;nico" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_mail.png" border="0" alt="Compartir por correo electr&oacute;nico">&nbsp;<span>e-mail</span></a></li></ul> </li></ul> </div><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/Logo_UE_FEDER.gif" class="feder" alt="Fondos"><div id="footer"> <div id="piea"> <div class="lineacolor fondocolor1">&nbsp;</div><div>&nbsp;</div><div> <div id="piea1"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/mapaWeb/index.htm" class="enlaces" accesskey="m">Mapa web</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm" class="enlaces" accesskey="l">Aviso legal</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/protecciondedatos/index.html" class="enlaces" accesskey="p">Protecci&oacute;n de datos</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/buzon_web/index.jsp" class="enlaces" accesskey="o">Tu opini&oacute;n</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/accesibilidad/index.htm" class="enlaces" accesskey="a">Accesibilidad</a> <img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/w3caa.jpg" alt="Logo de w3c" id="logow3caa"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm#cc" class="enlaceimg"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/cc-by.png" title="Publicado bajo Licencia Creative Commons - Reconocimiento 4.0" alt="CC-BY 4.0" id="logoccby"></a> </div><div id="piea2"> Pabell&oacute;n de Nueva Zelanda. <br>C/ Leonardo Da Vinci, n&deg; 21. Isla de La Cartuja. 41071-SEVILLA.<br>Tlf.: <strong>900 101 407/955 033 800</strong> | Fax: <strong>955 033 816</strong><br></div></div></div></div>',
  cssList: [
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
  ]
}

const configHeaderIECA = {
  open: true,
  htmlCode: '<div id="cabecera"> <div id="cabecera_1"> <div id="logos"> <a href="https://www.juntadeandalucia.es"><img alt="Junta de Andalucía" title="Junta de Andalucía" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoJuntaA.png"></a> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/" accesskey="h"><img alt="Web del Instituto de Estadística y Cartografía de Andalucía" title="Web del Instituto de Estadística y Cartografía de Andalucía" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoIECAA.png"></a> </div></div><div id="cabecera_2"> <div id="cabecera_2a"> <div id="redessociales"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/blog/"><img alt="Síguenos en nuestro blog" title="Síguenos en nuestro blog" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_blogger.png"></a> <a href="https://www.twitter.com/IECA_Andalucia"><img alt="Síguenos en Twitter" title="Síguenos en Twitter" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png"></a> <a href="https://www.facebook.com/institutodeestadisticadeandalucia"><img alt="Síguenos en Facebook" title="Síguenos en Facebook" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png"></a> </div></div><div id="cabecera_2b"> <div id="cabecera_2b_menu" class="lateral10 bordecolor2"> <ul> <li><a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/contacto.html" accesskey="c">Contacto</a></li><li><a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/suscripcion/index.htm" accesskey="s">Suscripción</a></li><li><a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/calendario/index.htm" accesskey="d">Calendario</a></li><li>&nbsp;</li></ul> </div></div></div></div><div id="navigation"> <div class="lineacolor fondocolor1">&nbsp;</div><div id="menu_horizontal"> <div id="menu_horizontal_1"> <div id="caminomigas"> <img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/acciones/ico_aqui.png" alt="Ruta">Está en: <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/">Inicio</a> - <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/temas/index-geo.htm">Georreferenciación</a> - <a href="../index.htm">Página del producto</a> </div></div><div id="menu_horizontal_2"> <div id="botoneramenu"> </div></div></div></div></div>',
  cssList: [
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
  ]
}

//config plugin gridinfo

const configGridInfoTipologiasConstructivas = [{
  wmsUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  wfsUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wfs?',
  wfsLayer: 'gridcattp_250',
  zoom: 6,
  info: [
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c011_viviendas_colectivas',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c011',
          title: 'Viviendas colectivas. Urbano',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c012_viviendas_unifamiliares',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c012',
          title: 'Viviendas unifamiliares. Urbano',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c013_edificiacion_rural',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c013',
          title: 'Edificación rural',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c01G_garages_viviendas',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c01g',
          title: 'Garajes viviendas',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c022_otros_garajes',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c022',
          title: 'Otros garajes y aparcamientos',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c02_industrial',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c02',
          title: 'Industrial',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c03_oficinas',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c03',
          title: 'Oficinas',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c04_comercio',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c04',
          title: 'Comercio',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c05_Deportes',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c05',
          title: 'Deportes',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c05P_piscinas',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c05p',
          title: 'Piscinas',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c06_espectaculos',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c06',
          title: 'Espectáculos',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c07_hosteleria_ocio',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c07',
          title: 'Hostelería y Ocio',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c08_sanitarios_beneficos',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c08',
          title: 'Sanitarios, asistenciales y benéficos',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c09_culturales',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c09',
          title: 'Culturales',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c093_religioso',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c093',
          title: 'Religiosos',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c10_singulares',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c10',
          title: 'Singulares',
        }
      ]
    },
    {
      wmsLayer: 'gridcattp_250',
      style: 'stl_c1034_golf',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
      infoLayer: 'gridcattp_250',
      fields: [
        {
          minValue: 1,
          field: 'c1034',
          title: 'Campos de Golf',
        }
      ]
    }
  ]
}]




const configGridInfoPoblacion = [{
  wmsUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  wfsUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/grid/wfs?',
  wfsLayer: 'gridp_250',
  zoom: 6,
  info: [
    {
      wmsLayer: 'nacionalidad_2019',
      style: '',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridpob/wms?',
      infoLayer: 'gridpob_250',
      fields: [
        {
          minValue: -1,
          field: 'esp',
          title: 'España',
        },
        {
          minValue: -1,
          field: 'ue15',
          title: 'Unión Europea (15)',
        },
        {
          minValue: -1,
          field: 'mag',
          title: 'Magreb',
        },
        {
          minValue: -1,
          field: 'ams',
          title: 'América del Sur',
        },
        {
          minValue: -1,
          field: 'otr',
          title: 'Otras',
        },
        {
          minValue: -1,
          field: 'pob_tot',
          title: 'TOTAL',
        }
      ]
    },
    {
      wmsLayer: 'segsoc_rellab_2019',
      style: '',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridafil/wms?',
      infoLayer: 'gridafil_250',
      fields: [
        {
          minValue: -1,
          field: 'afil_ss_a',
          title: 'Cuenta ajena',
        },
        {
          minValue: -1,
          field: 'afil_ss_p',
          title: 'Cuenta propia',
        },
        {
          minValue: -1,
          field: 'afil_ss',
          title: 'TOTAL',
        }
      ]
    }
  ]
},
{
  wmsUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  wfsUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/grid2018/wfs?',
  wfsLayer: 'gridp18_250',
  zoom: 6,
  info: [
    {
      wmsLayer: 'nacionalidad_2018',
      style: '',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridpob2018/wms?',
      infoLayer: 'gridpob18_250',
      fields: [
        {
          minValue: -1,
          field: 'esp',
          title: 'España',
        },
        {
          minValue: -1,
          field: 'ue15',
          title: 'Unión Europea (15)',
        },
        {
          minValue: -1,
          field: 'mag',
          title: 'Magreb',
        },
        {
          minValue: -1,
          field: 'ams',
          title: 'América del Sur',
        },
        {
          minValue: -1,
          field: 'otr',
          title: 'Otras',
        },
        {
          minValue: -1,
          field: 'pob_tot',
          title: 'TOTAL',
        }
      ]
    },
    {
      wmsLayer: 'segsoc_rellab_2018',
      style: '',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridafil2018/wms?',
      infoLayer: 'gridafil18_250',
      fields: [
        {
          minValue: -1,
          field: 'afil_ss_a',
          title: 'Cuenta ajena',
        },
        {
          minValue: -1,
          field: 'afil_ss_p',
          title: 'Cuenta propia',
        },
        {
          minValue: -1,
          field: 'afil_ss',
          title: 'TOTAL',
        }
      ]
    }
  ]
},
{
  wmsUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/visorGrid/wms?',
  wfsUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/grid2017/wfs?',
  wfsLayer: 'gridp17_250',
  zoom: 6,
  info: [
    {
      wmsLayer: 'nacionalidad_2017',
      style: '',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridpob2017/wms?',
      infoLayer: 'gridpob17_250',
      fields: [
        {
          minValue: -1,
          field: 'esp',
          title: 'España',
        },
        {
          minValue: -1,
          field: 'ue15',
          title: 'Unión Europea (15)',
        },
        {
          minValue: -1,
          field: 'mag',
          title: 'Magreb',
        },
        {
          minValue: -1,
          field: 'ams',
          title: 'América del Sur',
        },
        {
          minValue: -1,
          field: 'otr',
          title: 'Otras',
        },
        {
          minValue: -1,
          field: 'pob_tot',
          title: 'TOTAL',
        }
      ]
    },
    {
      wmsLayer: 'segsoc_rellab_2017',
      style: '',
      infoUrl: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridafil2017/wms?',
      infoLayer: 'gridafil17_250',
      fields: [
        {
          minValue: -1,
          field: 'afil_ss_a',
          title: 'Cuenta ajena',
        },
        {
          minValue: -1,
          field: 'afil_ss_p',
          title: 'Cuenta propia',
        },
        {
          minValue: -1,
          field: 'afil_ss',
          title: 'TOTAL',
        }
      ]
    }
  ]
}
]


const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configTipologiasConstructivas);
//const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configGridPoblacion);
const baseLayerSelector = new M.plugin.Simplebaselayerselector(configSimpleBaseLayerSelector);
const simpleLegend = new M.plugin.Simplelegend()
const mapheader = new M.plugin.Mapheader(configHeaderIECA);
const mapfooter = new M.plugin.Mapfooter(configFooterIECA);

map.addPlugin(inputSelectAddLayer);
map.addPlugin(baseLayerSelector);
map.addPlugin(simpleLegend);
map.addPlugin(mapfooter);
map.addPlugin(mapheader);

const mp = new Gridinfo(configGridInfoTipologiasConstructivas);
//const mp = new Gridinfo(configGridInfoPoblacion);
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
