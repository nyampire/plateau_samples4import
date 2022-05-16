var debug = {};
var site = "https://nyampire.github.io/plateau_samples4import/";

var map = L.map('map',{
  center: [35.658, 139.745],
  zoom: 11,
  minZoom: 6,
  maxZoom: 16,
  contextmenu: true,
  contextmenuWidth: 180,
});

//OSMレイヤー追加
var osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 16
    }
);
osm.addTo(map);

// テストデータ: アイコン表示
$.getJSON(site+"tile/test.geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.id);
        }
    }).addTo(map);
});

// 10207 館林市
var dpath10207 = "10207_tatebayashi-shi_2020";
$.getJSON(site+dpath10207+"/bldg/"+dpath10207+".geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
			if (feature.geometry.type === "Point") {
				if (feature.properties.path === "undefined") {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version);
				}
				else {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version
				    	+"<br/>path: "+feature.properties.path
				    	+"<br/><a href='"+ site +feature.properties.path +"'>DOWNLOAD</a>");
				}
			}
		}
    }).addTo(map);
});

// 11230_niiza-shi_2020
var dpath11230 = "11230_niiza-shi_2020";
$.getJSON(site+dpath11230+"/bldg/"+dpath11230+".geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
			if (feature.geometry.type === "Point") {
				if (feature.properties.path === "undefined") {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version);
				}
				else {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version
				    	+"<br/>path: "+feature.properties.path
				    	+"<br/><a href='"+ site +feature.properties.path +"'>DOWNLOAD</a>");
				}
			}
		}
    }).addTo(map);
});

// 11326_moroyama-machi_2020
var dpath11326 = "11326_moroyama-machi_2020";
$.getJSON(site+dpath11326+"/bldg/"+dpath11326+".geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
			if (feature.geometry.type === "Point") {
				if (feature.properties.path === "undefined") {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version);
				}
				else {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version
				    	+"<br/>path: "+feature.properties.path
				    	+"<br/><a href='"+ site +feature.properties.path +"'>DOWNLOAD</a>");
				}
			}
		}
    }).addTo(map);
});

// 20202_20202_matsumoto-shi_2020_citygml_3_op
var dpath20202 = "20202_matsumoto-shi_2020_citygml_3_op";
$.getJSON(site+dpath20202+"/bldg/"+dpath20202+".geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
			if (feature.geometry.type === "Point") {
				if (feature.properties.path === "undefined") {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version);
				}
				else {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version
				    	+"<br/>path: "+feature.properties.path
				    	+"<br/><a href='"+ site +feature.properties.path +"'>DOWNLOAD</a>");
				}
			}
		}
    }).addTo(map);
});

// 20209_ina-shi_2020_citygml_4_op
var dpath20209 = "20209_ina-shi_2020_citygml_4_op";
$.getJSON(site+dpath20209+"/bldg/"+dpath20209+".geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
			if (feature.geometry.type === "Point") {
				if (feature.properties.path === "undefined") {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version);
				}
				else {
				    layer.bindPopup("code: "+ feature.properties.id
				    	+"<br/>version: "+feature.properties.version
				    	+"<br/>path: "+feature.properties.path
				    	+"<br/><a href='"+ site +feature.properties.path +"'>DOWNLOAD</a>");
				}
			}
		}
    }).addTo(map);
});

//Globals that we can change later.
var fillColor = 'rgba(149,139,255,0.4)';
var strokeColor = 'rgb(20,20,20)';

L.control.scale({imperial:false}).addTo(map);

    // MapCenterCoord
    var options = {
      position: 'bottomleft' // 'topleft', 'topright', 'bottomleft' (default) ,'bottomright'
    }
    L.control.mapCenterCoord(options).addTo(map);

