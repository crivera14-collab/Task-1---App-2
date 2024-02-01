require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {
  var map = new Map({
    basemap: "streets"
  });
 
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-90.1994, 38.6270],
    zoom: 12 // Adjust the zoom level as needed
  });
 
  /********************
   * Add feature layers
   ********************/
 
  var featureLayer_1 = new FeatureLayer({
    url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/St__Louis_Crime_WFL1/FeatureServer"
  });
 
  map.add(featureLayer_1);
 
  var featureLayer_2 = new FeatureLayer({
    url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/2020_wards/FeatureServer"
  });
 
  map.add(featureLayer_2);
});