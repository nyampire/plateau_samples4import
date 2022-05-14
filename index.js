var debug = {};

var map = L.map('map',{
  center: [35.658, 139.745],
  zoom: 11,
  minZoom: 6,
  maxZoom: 16,
  contextmenu: true,
  contextmenuWidth: 180,
  
    contextmenuItems: [{
        text: 'この地点を地図の中央に',
        callback: setCenterMap
      },
      {
        text: '取得(地図中央1km範囲)',
        callback: showLatLng
      },
      {
        text: '取得(地図中央3km範囲)',
        callback: showLatLng3
      },
      {
        text: '取得(地図中央5km範囲)',
        callback: showLatLng5
      },
      {
        text: '取得(地図中央10km範囲)',
        callback: showLatLng10
      },
      {
        text: '取得(地図中央20km範囲)',
        callback: showLatLng20
      }]
    });

    function showLatLng (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/busstop?latlng="+ e.latlng +"&km=1";
    }
    function showLatLng3 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/busstop?latlng="+ e.latlng +"&km=3";
    }
    function showLatLng5 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/busstop?latlng="+ e.latlng +"&km=5";
    }
    function showLatLng10 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/busstop?latlng="+ e.latlng +"&km=10";
    }
    function showLatLng20 (e) {
        location.href = "http://surveyor.mydns.jp/unMapped/api/kmz/busstop?latlng="+ e.latlng +"&km=20";
    }

    function setCenterMap (e) {
        map.panTo(e.latlng);
    }
    map.locate({setView: true, maxZoom: 16, timeout: 20000});

//OSMレイヤー追加
var osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 16
    }
);
osm.addTo(map);

// テストデータ
var mvtSource0 = new L.TileLayer.MVTSource({
    url: "https://yuuhayashi.github.io/plateau_samples4import/tile/test0/{z}/{x}/{y}.pbf",
    style: function (feature) {
        var style = {};
        style.color = 'magenta';
        style.radius = 8;
        style.selected = {
          radius: 12
        };
        return style;
    },
});
map.addLayer(mvtSource0);

// テストデータ: アイコン表示
$.getJSON("tile/test.geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.id)
        }
    }).addTo(map);
});

// 10207 館林市
var mvt10207 = new L.TileLayer.MVTSource({
    url: "https://yuuhayashi.github.io/plateau_samples4import/tile/10207/{z}/{x}/{y}.pbf",
    style: function (feature) {
        var style = {};
        style.color = 'magenta';
        style.radius = 8;
        style.selected = {
          radius: 12
        };
        return style;
    }
});
map.addLayer(mvt10207);

// 10207 館林市: アイコン表示
$.getJSON("https://yuuhayashi.github.io/plateau_samples4import/tile/10207_tatebayashi-shi_2020.geojson", function(data) {
    L.geoJson(data, {
        onEachFeature: function (feature, layer) {
			if (feature.geometry.type === "Point") {
	            layer.bindPopup(feature.properties.id+"<br/>"+feature.properties.version)
			}
        }
    }).addTo(map);
});

//Globals that we can change later.
var fillColor = 'rgba(149,139,255,0.4)';
var strokeColor = 'rgb(20,20,20)';

//Add layer
mvt10207.addTo(map);

//Add layer
mvtSource0.addTo(map);

L.control.scale({imperial:false}).addTo(map);

    // MapCenterCoord
    var options = {
      position: 'bottomleft' // 'topleft', 'topright', 'bottomleft' (default) ,'bottomright'
    }
    L.control.mapCenterCoord(options).addTo(map);

