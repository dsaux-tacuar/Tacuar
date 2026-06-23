var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_ControladoresST_1 = new ol.format.GeoJSON();
var features_ControladoresST_1 = format_ControladoresST_1.readFeatures(json_ControladoresST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControladoresST_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControladoresST_1.addFeatures(features_ControladoresST_1);
var lyr_ControladoresST_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControladoresST_1, 
                style: style_ControladoresST_1,
                popuplayertitle: 'Controladores ST',
                interactive: true,
                title: '<img src="styles/legend/ControladoresST_1.png" /> Controladores ST'
            });
var format_NosonmarcaTacuar_2 = new ol.format.GeoJSON();
var features_NosonmarcaTacuar_2 = format_NosonmarcaTacuar_2.readFeatures(json_NosonmarcaTacuar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NosonmarcaTacuar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NosonmarcaTacuar_2.addFeatures(features_NosonmarcaTacuar_2);
var lyr_NosonmarcaTacuar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NosonmarcaTacuar_2, 
                style: style_NosonmarcaTacuar_2,
                popuplayertitle: 'No son marca Tacuar',
                interactive: true,
                title: '<img src="styles/legend/NosonmarcaTacuar_2.png" /> No son marca Tacuar'
            });
var format_Sinmodernizar_3 = new ol.format.GeoJSON();
var features_Sinmodernizar_3 = format_Sinmodernizar_3.readFeatures(json_Sinmodernizar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinmodernizar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinmodernizar_3.addFeatures(features_Sinmodernizar_3);
var lyr_Sinmodernizar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinmodernizar_3, 
                style: style_Sinmodernizar_3,
                popuplayertitle: 'Sin modernizar',
                interactive: true,
                title: '<img src="styles/legend/Sinmodernizar_3.png" /> Sin modernizar'
            });
var format_Modernizados_4 = new ol.format.GeoJSON();
var features_Modernizados_4 = format_Modernizados_4.readFeatures(json_Modernizados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modernizados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modernizados_4.addFeatures(features_Modernizados_4);
var lyr_Modernizados_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Modernizados_4, 
                style: style_Modernizados_4,
                popuplayertitle: 'Modernizados',
                interactive: true,
                title: '<img src="styles/legend/Modernizados_4.png" /> Modernizados'
            });

lyr_CartoLight_0.setVisible(true);lyr_ControladoresST_1.setVisible(true);lyr_NosonmarcaTacuar_2.setVisible(true);lyr_Sinmodernizar_3.setVisible(true);lyr_Modernizados_4.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_ControladoresST_1,lyr_NosonmarcaTacuar_2,lyr_Sinmodernizar_3,lyr_Modernizados_4];
lyr_ControladoresST_1.set('fieldAliases', {'INTERSECCI': 'INTERSECCI', 'ZONA': 'ZONA', 'x': 'x', 'y': 'y', 'FABRICACIO': 'FABRICACIO', 'MICRO CPU': 'MICRO CPU', 'SOFTWARE': 'SOFTWARE', 'GRUPO': 'GRUPO', 'ID_1': 'ID_1', 'CONEXION': 'CONEXION', 'MOD 4G': 'MOD 4G', 'MODERNIZ.': 'MODERNIZ.', 'OBSERVAC.': 'OBSERVAC.', 'FECHA ACT': 'FECHA ACT', 'COMUNICADO': 'COMUNICADO', 'ID': 'ID', });
lyr_NosonmarcaTacuar_2.set('fieldAliases', {'INTERSECCI': 'INTERSECCI', 'ZONA': 'ZONA', 'x': 'x', 'y': 'y', 'FABRICACIO': 'FABRICACIO', 'MICRO CPU': 'MICRO CPU', 'SOFTWARE': 'SOFTWARE', 'GRUPO': 'GRUPO', 'ID_1': 'ID_1', 'CONEXION': 'CONEXION', 'MOD 4G': 'MOD 4G', 'MODERNIZ.': 'MODERNIZ.', 'OBSERVAC.': 'OBSERVAC.', 'FECHA ACT': 'FECHA ACT', 'COMUNICADO': 'COMUNICADO', 'ID': 'ID', });
lyr_Sinmodernizar_3.set('fieldAliases', {'INTERSECCI': 'INTERSECCI', 'ZONA': 'ZONA', 'x': 'x', 'y': 'y', 'FABRICACIO': 'FABRICACIO', 'MICRO CPU': 'MICRO CPU', 'SOFTWARE': 'SOFTWARE', 'GRUPO': 'GRUPO', 'ID_1': 'ID_1', 'CONEXION': 'CONEXION', 'MOD 4G': 'MOD 4G', 'MODERNIZ.': 'MODERNIZ.', 'OBSERVAC.': 'OBSERVAC.', 'FECHA ACT': 'FECHA ACT', 'COMUNICADO': 'COMUNICADO', 'ID': 'ID', });
lyr_Modernizados_4.set('fieldAliases', {'INTERSECCI': 'INTERSECCI', 'ZONA': 'ZONA', 'x': 'x', 'y': 'y', 'FABRICACIO': 'FABRICACIO', 'MICRO CPU': 'MICRO CPU', 'SOFTWARE': 'SOFTWARE', 'GRUPO': 'GRUPO', 'ID_1': 'ID_1', 'CONEXION': 'CONEXION', 'MOD 4G': 'MOD 4G', 'MODERNIZ.': 'MODERNIZ.', 'OBSERVAC.': 'OBSERVAC.', 'FECHA ACT': 'FECHA ACT', 'COMUNICADO': 'COMUNICADO', 'ID': 'ID', });
lyr_ControladoresST_1.set('fieldImages', {'INTERSECCI': '', 'ZONA': '', 'x': '', 'y': '', 'FABRICACIO': '', 'MICRO CPU': '', 'SOFTWARE': '', 'GRUPO': '', 'ID_1': '', 'CONEXION': '', 'MOD 4G': '', 'MODERNIZ.': '', 'OBSERVAC.': '', 'FECHA ACT': '', 'COMUNICADO': '', 'ID': '', });
lyr_NosonmarcaTacuar_2.set('fieldImages', {'INTERSECCI': '', 'ZONA': '', 'x': '', 'y': '', 'FABRICACIO': '', 'MICRO CPU': '', 'SOFTWARE': '', 'GRUPO': '', 'ID_1': '', 'CONEXION': '', 'MOD 4G': '', 'MODERNIZ.': '', 'OBSERVAC.': '', 'FECHA ACT': '', 'COMUNICADO': '', 'ID': '', });
lyr_Sinmodernizar_3.set('fieldImages', {'INTERSECCI': '', 'ZONA': '', 'x': '', 'y': '', 'FABRICACIO': '', 'MICRO CPU': '', 'SOFTWARE': '', 'GRUPO': '', 'ID_1': '', 'CONEXION': '', 'MOD 4G': '', 'MODERNIZ.': '', 'OBSERVAC.': '', 'FECHA ACT': '', 'COMUNICADO': '', 'ID': '', });
lyr_Modernizados_4.set('fieldImages', {'INTERSECCI': '', 'ZONA': '', 'x': '', 'y': '', 'FABRICACIO': '', 'MICRO CPU': '', 'SOFTWARE': '', 'GRUPO': '', 'ID_1': '', 'CONEXION': '', 'MOD 4G': '', 'MODERNIZ.': '', 'OBSERVAC.': '', 'FECHA ACT': '', 'COMUNICADO': '', 'ID': '', });
lyr_ControladoresST_1.set('fieldLabels', {'INTERSECCI': 'inline label - visible with data', 'ZONA': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'FABRICACIO': 'hidden field', 'MICRO CPU': 'hidden field', 'SOFTWARE': 'hidden field', 'GRUPO': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'CONEXION': 'header label - visible with data', 'MOD 4G': 'header label - visible with data', 'MODERNIZ.': 'header label - visible with data', 'OBSERVAC.': 'header label - visible with data', 'FECHA ACT': 'hidden field', 'COMUNICADO': 'header label - visible with data', 'ID': 'header label - visible with data', });
lyr_NosonmarcaTacuar_2.set('fieldLabels', {'INTERSECCI': 'inline label - visible with data', 'ZONA': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'FABRICACIO': 'hidden field', 'MICRO CPU': 'hidden field', 'SOFTWARE': 'hidden field', 'GRUPO': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'CONEXION': 'header label - visible with data', 'MOD 4G': 'header label - visible with data', 'MODERNIZ.': 'header label - visible with data', 'OBSERVAC.': 'header label - visible with data', 'FECHA ACT': 'hidden field', 'COMUNICADO': 'header label - visible with data', 'ID': 'header label - visible with data', });
lyr_Sinmodernizar_3.set('fieldLabels', {'INTERSECCI': 'inline label - visible with data', 'ZONA': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'FABRICACIO': 'hidden field', 'MICRO CPU': 'hidden field', 'SOFTWARE': 'hidden field', 'GRUPO': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'CONEXION': 'header label - visible with data', 'MOD 4G': 'header label - visible with data', 'MODERNIZ.': 'header label - visible with data', 'OBSERVAC.': 'header label - visible with data', 'FECHA ACT': 'hidden field', 'COMUNICADO': 'header label - visible with data', 'ID': 'header label - visible with data', });
lyr_Modernizados_4.set('fieldLabels', {'INTERSECCI': 'inline label - visible with data', 'ZONA': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'FABRICACIO': 'hidden field', 'MICRO CPU': 'hidden field', 'SOFTWARE': 'hidden field', 'GRUPO': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'CONEXION': 'header label - visible with data', 'MOD 4G': 'header label - visible with data', 'MODERNIZ.': 'header label - visible with data', 'OBSERVAC.': 'header label - visible with data', 'FECHA ACT': 'hidden field', 'COMUNICADO': 'header label - visible with data', 'ID': 'header label - visible with data', });
lyr_Modernizados_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});