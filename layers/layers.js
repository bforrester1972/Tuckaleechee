ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9356355.466125, 4250671.874651, -9304099.900043, 4281703.123874]);
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

lyr_GoogleHybrid_0.setVisible(true);lyr_Tuckaleecheeallcompletedmeterlocations_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Tuckaleecheeallcompletedmeterlocations_1];
lyr_Tuckaleecheeallcompletedmeterlocations_1.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'job id': 'job id', 'job type': 'job type', 'date': 'date', 'week': 'week', 'month': 'month', 'route': 'route', 'completed': 'completed', 'worker': 'worker', 'old meter number': 'old meter number', 'meter size': 'meter size', 'address': 'address', 'preveous meter reading': 'preveous meter reading', 'final meter reading': 'final meter reading', 'consumption': 'consumption', 'new meter number': 'new meter number', 'new radio number': 'new radio number', 'lidtype': 'lidtype', 'note': 'note', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Tuckaleecheeallcompletedmeterlocations_1.set('fieldImages', {'fid': '', 'qc_id': '', 'job id': '', 'job type': '', 'date': '', 'week': '', 'month': '', 'route': '', 'completed': '', 'worker': '', 'old meter number': '', 'meter size': '', 'address': '', 'preveous meter reading': '', 'final meter reading': '', 'consumption': '', 'new meter number': '', 'new radio number': '', 'lidtype': '', 'note': '', 'latitude': '', 'longitude': '', });
lyr_Tuckaleecheeallcompletedmeterlocations_1.set('fieldLabels', {'fid': 'no label', 'qc_id': 'no label', 'job id': 'no label', 'job type': 'no label', 'date': 'no label', 'week': 'no label', 'month': 'no label', 'route': 'inline label - always visible', 'completed': 'no label', 'worker': 'no label', 'old meter number': 'no label', 'meter size': 'inline label - always visible', 'address': 'header label - visible with data', 'preveous meter reading': 'no label', 'final meter reading': 'no label', 'consumption': 'no label', 'new meter number': 'inline label - always visible', 'new radio number': 'inline label - always visible', 'lidtype': 'no label', 'note': 'no label', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', });
lyr_Tuckaleecheeallcompletedmeterlocations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});