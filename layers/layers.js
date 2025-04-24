ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TuckATTInstalled_1 = new ol.format.GeoJSON();
var features_TuckATTInstalled_1 = format_TuckATTInstalled_1.readFeatures(json_TuckATTInstalled_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TuckATTInstalled_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckATTInstalled_1.addFeatures(features_TuckATTInstalled_1);
var lyr_TuckATTInstalled_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckATTInstalled_1, 
                style: style_TuckATTInstalled_1,
                popuplayertitle: 'Tuck AT&T Installed',
                interactive: true,
                title: '<img src="styles/legend/TuckATTInstalled_1.png" /> Tuck AT&T Installed'
            });
var format_TuckVerizonInstalled_2 = new ol.format.GeoJSON();
var features_TuckVerizonInstalled_2 = format_TuckVerizonInstalled_2.readFeatures(json_TuckVerizonInstalled_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TuckVerizonInstalled_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckVerizonInstalled_2.addFeatures(features_TuckVerizonInstalled_2);
var lyr_TuckVerizonInstalled_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckVerizonInstalled_2, 
                style: style_TuckVerizonInstalled_2,
                popuplayertitle: 'Tuck Verizon Installed',
                interactive: true,
                title: '<img src="styles/legend/TuckVerizonInstalled_2.png" /> Tuck Verizon Installed'
            });
var format_TuckUnknowEndpointType_3 = new ol.format.GeoJSON();
var features_TuckUnknowEndpointType_3 = format_TuckUnknowEndpointType_3.readFeatures(json_TuckUnknowEndpointType_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TuckUnknowEndpointType_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckUnknowEndpointType_3.addFeatures(features_TuckUnknowEndpointType_3);
var lyr_TuckUnknowEndpointType_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckUnknowEndpointType_3, 
                style: style_TuckUnknowEndpointType_3,
                popuplayertitle: 'Tuck Unknow Endpoint Type',
                interactive: true,
                title: '<img src="styles/legend/TuckUnknowEndpointType_3.png" /> Tuck Unknow Endpoint Type'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_TuckATTInstalled_1.setVisible(true);lyr_TuckVerizonInstalled_2.setVisible(true);lyr_TuckUnknowEndpointType_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TuckATTInstalled_1,lyr_TuckVerizonInstalled_2,lyr_TuckUnknowEndpointType_3];
lyr_TuckATTInstalled_1.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TuckVerizonInstalled_2.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TuckUnknowEndpointType_3.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TuckATTInstalled_1.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'Range', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'TextEdit', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TuckVerizonInstalled_2.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'TextEdit', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'Range', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TuckUnknowEndpointType_3.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'TextEdit', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'TextEdit', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TuckATTInstalled_1.set('fieldLabels', {'Job Id': 'inline label - always visible', 'Job Type': 'inline label - always visible', 'Date': 'inline label - always visible', 'Week': 'inline label - always visible', 'Month': 'inline label - always visible', 'Route': 'inline label - always visible', 'Completed': 'inline label - always visible', 'Worker': 'inline label - always visible', 'Old Meter Number': 'inline label - always visible', 'Meter Size': 'inline label - always visible', 'Address': 'header label - visible with data', 'Preveous Meter Reading': 'inline label - always visible', 'Final Meter Reading': 'inline label - always visible', 'Consumption': 'inline label - always visible', 'New meter number': 'inline label - always visible', 'New radio number': 'inline label - always visible', 'Endpoint Type': 'inline label - always visible', 'LidType': 'inline label - always visible', 'Note': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_TuckVerizonInstalled_2.set('fieldLabels', {'Job Id': 'inline label - always visible', 'Job Type': 'inline label - always visible', 'Date': 'inline label - always visible', 'Week': 'inline label - always visible', 'Month': 'inline label - always visible', 'Route': 'inline label - always visible', 'Completed': 'inline label - always visible', 'Worker': 'inline label - always visible', 'Old Meter Number': 'no label', 'Meter Size': 'inline label - always visible', 'Address': 'header label - visible with data', 'Preveous Meter Reading': 'inline label - always visible', 'Final Meter Reading': 'inline label - always visible', 'Consumption': 'inline label - always visible', 'New meter number': 'inline label - always visible', 'New radio number': 'inline label - always visible', 'Endpoint Type': 'inline label - always visible', 'LidType': 'inline label - always visible', 'Note': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_TuckUnknowEndpointType_3.set('fieldLabels', {'Job Id': 'inline label - always visible', 'Job Type': 'inline label - always visible', 'Date': 'inline label - always visible', 'Week': 'inline label - always visible', 'Month': 'inline label - always visible', 'Route': 'inline label - always visible', 'Completed': 'inline label - always visible', 'Worker': 'inline label - always visible', 'Old Meter Number': 'inline label - always visible', 'Meter Size': 'inline label - always visible', 'Address': 'header label - visible with data', 'Preveous Meter Reading': 'inline label - always visible', 'Final Meter Reading': 'inline label - always visible', 'Consumption': 'inline label - always visible', 'New meter number': 'inline label - always visible', 'New radio number': 'inline label - always visible', 'Endpoint Type': 'inline label - always visible', 'LidType': 'inline label - always visible', 'Note': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_TuckUnknowEndpointType_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});