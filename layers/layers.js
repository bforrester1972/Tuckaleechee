ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9375161.211930, 4240553.926202, -9277448.427163, 4302616.424649]);
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
var format_Tuckaleecheeallcompletedmeterlocations_1 = new ol.format.GeoJSON();
var features_Tuckaleecheeallcompletedmeterlocations_1 = format_Tuckaleecheeallcompletedmeterlocations_1.readFeatures(json_Tuckaleecheeallcompletedmeterlocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuckaleecheeallcompletedmeterlocations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuckaleecheeallcompletedmeterlocations_1.addFeatures(features_Tuckaleecheeallcompletedmeterlocations_1);
var lyr_Tuckaleecheeallcompletedmeterlocations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuckaleecheeallcompletedmeterlocations_1, 
                style: style_Tuckaleecheeallcompletedmeterlocations_1,
                popuplayertitle: 'Tuckaleechee all completed meter locations',
                interactive: true,
                title: '<img src="styles/legend/Tuckaleecheeallcompletedmeterlocations_1.png" /> Tuckaleechee all completed meter locations'
            });
var format_TuckInstalledVerizon_2 = new ol.format.GeoJSON();
var features_TuckInstalledVerizon_2 = format_TuckInstalledVerizon_2.readFeatures(json_TuckInstalledVerizon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuckInstalledVerizon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckInstalledVerizon_2.addFeatures(features_TuckInstalledVerizon_2);
var lyr_TuckInstalledVerizon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckInstalledVerizon_2, 
                style: style_TuckInstalledVerizon_2,
                popuplayertitle: 'Tuck Installed Verizon',
                interactive: true,
                title: '<img src="styles/legend/TuckInstalledVerizon_2.png" /> Tuck Installed Verizon'
            });
var format_TuckInstalledATT_3 = new ol.format.GeoJSON();
var features_TuckInstalledATT_3 = format_TuckInstalledATT_3.readFeatures(json_TuckInstalledATT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuckInstalledATT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckInstalledATT_3.addFeatures(features_TuckInstalledATT_3);
var lyr_TuckInstalledATT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckInstalledATT_3, 
                style: style_TuckInstalledATT_3,
                popuplayertitle: 'Tuck Installed AT&T',
                interactive: true,
                title: '<img src="styles/legend/TuckInstalledATT_3.png" /> Tuck Installed AT&T'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Tuckaleecheeallcompletedmeterlocations_1.setVisible(true);lyr_TuckInstalledVerizon_2.setVisible(true);lyr_TuckInstalledATT_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Tuckaleecheeallcompletedmeterlocations_1,lyr_TuckInstalledVerizon_2,lyr_TuckInstalledATT_3];
lyr_Tuckaleecheeallcompletedmeterlocations_1.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'job id': 'job id', 'job type': 'job type', 'date': 'date', 'week': 'week', 'month': 'month', 'route': 'route', 'completed': 'completed', 'worker': 'worker', 'old meter number': 'old meter number', 'meter size': 'meter size', 'address': 'address', 'preveous meter reading': 'preveous meter reading', 'final meter reading': 'final meter reading', 'consumption': 'consumption', 'new meter number': 'new meter number', 'new radio number': 'new radio number', 'lidtype': 'lidtype', 'note': 'note', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_TuckInstalledVerizon_2.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TuckInstalledATT_3.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Tuckaleecheeallcompletedmeterlocations_1.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'job id': 'Range', 'job type': 'TextEdit', 'date': 'DateTime', 'week': 'TextEdit', 'month': 'TextEdit', 'route': 'Range', 'completed': 'DateTime', 'worker': 'TextEdit', 'old meter number': 'TextEdit', 'meter size': 'TextEdit', 'address': 'TextEdit', 'preveous meter reading': 'Range', 'final meter reading': 'Range', 'consumption': 'Range', 'new meter number': 'Range', 'new radio number': 'Range', 'lidtype': 'TextEdit', 'note': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_TuckInstalledVerizon_2.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'TextEdit', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'Range', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TuckInstalledATT_3.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'TextEdit', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'TextEdit', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Tuckaleecheeallcompletedmeterlocations_1.set('fieldLabels', {'fid': 'no label', 'qc_id': 'no label', 'job id': 'no label', 'job type': 'no label', 'date': 'no label', 'week': 'no label', 'month': 'no label', 'route': 'inline label - always visible', 'completed': 'no label', 'worker': 'no label', 'old meter number': 'no label', 'meter size': 'inline label - always visible', 'address': 'header label - visible with data', 'preveous meter reading': 'no label', 'final meter reading': 'no label', 'consumption': 'no label', 'new meter number': 'inline label - always visible', 'new radio number': 'inline label - always visible', 'lidtype': 'no label', 'note': 'no label', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', });
lyr_TuckInstalledVerizon_2.set('fieldLabels', {'Job Id': 'no label', 'Job Type': 'no label', 'Date': 'no label', 'Week': 'no label', 'Month': 'no label', 'Route': 'no label', 'Completed': 'no label', 'Worker': 'no label', 'Old Meter Number': 'no label', 'Meter Size': 'no label', 'Address': 'no label', 'Preveous Meter Reading': 'no label', 'Final Meter Reading': 'no label', 'Consumption': 'no label', 'New meter number': 'no label', 'New radio number': 'no label', 'Endpoint Type': 'no label', 'LidType': 'no label', 'Note': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_TuckInstalledATT_3.set('fieldLabels', {'Job Id': 'inline label - always visible', 'Job Type': 'inline label - always visible', 'Date': 'inline label - always visible', 'Week': 'inline label - always visible', 'Month': 'inline label - always visible', 'Route': 'inline label - always visible', 'Completed': 'inline label - always visible', 'Worker': 'inline label - always visible', 'Old Meter Number': 'inline label - always visible', 'Meter Size': 'inline label - always visible', 'Address': 'header label - visible with data', 'Preveous Meter Reading': 'inline label - always visible', 'Final Meter Reading': 'inline label - always visible', 'Consumption': 'inline label - always visible', 'New meter number': 'inline label - always visible', 'New radio number': 'inline label - always visible', 'Endpoint Type': 'inline label - always visible', 'LidType': 'inline label - always visible', 'Note': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_TuckInstalledATT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});