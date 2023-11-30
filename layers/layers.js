var wms_layers = [];

var format_GeologiKatingan_0 = new ol.format.GeoJSON();
var features_GeologiKatingan_0 = format_GeologiKatingan_0.readFeatures(json_GeologiKatingan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologiKatingan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeologiKatingan_0.addFeatures(features_GeologiKatingan_0);
var lyr_GeologiKatingan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeologiKatingan_0, 
                style: style_GeologiKatingan_0,
                interactive: true,
    title: 'Geologi Katingan<br />\
    <img src="styles/legend/GeologiKatingan_0_0.png" /> Basal<br />\
    <img src="styles/legend/GeologiKatingan_0_1.png" /> Batuan Gunungapi Malasan<br />\
    <img src="styles/legend/GeologiKatingan_0_2.png" /> Endapan aluvium<br />\
    <img src="styles/legend/GeologiKatingan_0_3.png" /> Formasi Dahor<br />\
    <img src="styles/legend/GeologiKatingan_0_4.png" /> Formasi Mentemoi<br />\
    <img src="styles/legend/GeologiKatingan_0_5.png" /> Granit<br />\
    <img src="styles/legend/GeologiKatingan_0_6.png" /> Intrusi Sintang<br />\
    <img src="styles/legend/GeologiKatingan_0_7.png" /> Komplek Matan<br />\
    <img src="styles/legend/GeologiKatingan_0_8.png" /> Lava andesit<br />\
    <img src="styles/legend/GeologiKatingan_0_9.png" /> Malihan Pinoh<br />\
    <img src="styles/legend/GeologiKatingan_0_10.png" /> Tonalit Sepauk<br />\
    <img src="styles/legend/GeologiKatingan_0_11.png" /> <br />'
        });

lyr_GeologiKatingan_0.setVisible(true);
var layersList = [lyr_GeologiKatingan_0];
lyr_GeologiKatingan_0.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GeologiKatingan_0.set('fieldImages', {'SYMBOLS': 'TextEdit', 'NM_LEMBAR': 'TextEdit', 'NO_LEMBAR': 'Range', 'PROJECT': 'TextEdit', 'NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'CLASS_LITH': 'TextEdit', 'T_CLASS_EN': 'TextEdit', 'B_CLASS_EN': 'TextEdit', 'DESCRIP1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GeologiKatingan_0.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', 'CLASS_LITH': 'no label', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'DESCRIP1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_GeologiKatingan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});