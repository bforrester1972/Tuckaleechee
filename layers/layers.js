ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9345137.470798, 4266005.130610, -9327963.332867, 4281520.755222]);
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
var format_TuckInstalledVerizon_1 = new ol.format.GeoJSON();
var features_TuckInstalledVerizon_1 = format_TuckInstalledVerizon_1.readFeatures(json_TuckInstalledVerizon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuckInstalledVerizon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckInstalledVerizon_1.addFeatures(features_TuckInstalledVerizon_1);
var lyr_TuckInstalledVerizon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckInstalledVerizon_1, 
                style: style_TuckInstalledVerizon_1,
                popuplayertitle: 'Tuck Installed Verizon',
                interactive: true,
                title: '<img src="styles/legend/TuckInstalledVerizon_1.png" /> Tuck Installed Verizon'
            });
var format_TuckInstalledATT_2 = new ol.format.GeoJSON();
var features_TuckInstalledATT_2 = format_TuckInstalledATT_2.readFeatures(json_TuckInstalledATT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuckInstalledATT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuckInstalledATT_2.addFeatures(features_TuckInstalledATT_2);
var lyr_TuckInstalledATT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuckInstalledATT_2, 
                style: style_TuckInstalledATT_2,
                popuplayertitle: 'Tuck Installed AT&T',
                interactive: true,
                title: '<img src="styles/legend/TuckInstalledATT_2.png" /> Tuck Installed AT&T'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_TuckInstalledVerizon_1.setVisible(true);lyr_TuckInstalledATT_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TuckInstalledVerizon_1,lyr_TuckInstalledATT_2];
lyr_TuckInstalledVerizon_1.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TuckInstalledATT_2.set('fieldAliases', {'Job Id': 'Job Id', 'Job Type': 'Job Type', 'Date': 'Date', 'Week': 'Week', 'Month': 'Month', 'Route': 'Route', 'Completed': 'Completed', 'Worker': 'Worker', 'Old Meter Number': 'Old Meter Number', 'Meter Size': 'Meter Size', 'Address': 'Address', 'Preveous Meter Reading': 'Preveous Meter Reading', 'Final Meter Reading': 'Final Meter Reading', 'Consumption': 'Consumption', 'New meter number': 'New meter number', 'New radio number': 'New radio number', 'Endpoint Type': 'Endpoint Type', 'LidType': 'LidType', 'Note': 'Note', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TuckInstalledVerizon_1.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'TextEdit', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'Range', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TuckInstalledATT_2.set('fieldImages', {'Job Id': 'Range', 'Job Type': 'TextEdit', 'Date': 'TextEdit', 'Week': 'TextEdit', 'Month': 'TextEdit', 'Route': 'Range', 'Completed': 'DateTime', 'Worker': 'TextEdit', 'Old Meter Number': 'TextEdit', 'Meter Size': 'TextEdit', 'Address': 'TextEdit', 'Preveous Meter Reading': 'Range', 'Final Meter Reading': 'Range', 'Consumption': 'Range', 'New meter number': 'Range', 'New radio number': 'Range', 'Endpoint Type': 'TextEdit', 'LidType': 'TextEdit', 'Note': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TuckInstalledVerizon_1.set('fieldLabels', {'Job Id': 'no label', 'Job Type': 'no label', 'Date': 'no label', 'Week': 'no label', 'Month': 'no label', 'Route': 'no label', 'Completed': 'no label', 'Worker': 'no label', 'Old Meter Number': 'no label', 'Meter Size': 'no label', 'Address': 'no label', 'Preveous Meter Reading': 'no label', 'Final Meter Reading': 'no label', 'Consumption': 'no label', 'New meter number': 'no label', 'New radio number': 'no label', 'Endpoint Type': 'no label', 'LidType': 'no label', 'Note': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_TuckInstalledATT_2.set('fieldLabels', {'Job Id': 'no label', 'Job Type': 'no label', 'Date': 'no label', 'Week': 'no label', 'Month': 'no label', 'Route': 'no label', 'Completed': 'no label', 'Worker': 'no label', 'Old Meter Number': 'no label', 'Meter Size': 'no label', 'Address': 'no label', 'Preveous Meter Reading': 'no label', 'Final Meter Reading': 'no label', 'Consumption': 'no label', 'New meter number': 'no label', 'New radio number': 'no label', 'Endpoint Type': 'no label', 'LidType': 'no label', 'Note': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_TuckInstalledATT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});