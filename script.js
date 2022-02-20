require(["esri/WebScene","esri/views/SceneView","esri/Camera","esri/widgets/Legend","esri/widgets/LayerList","esri/widgets/Home","dojo/domReady!"],function(WebScene, SceneView, Camera, Layerlist, Legend, Home) {
    
  var scene = new WebScene({portalItem:{id:"0ef60b55ce3c46d88cdfaf186e5693e4" }});
      
  var camera = new Camera({position: [-122.1500,// lon42.8446, // lat16000// elevation in meters],tilt:30,heading: 360})
  
  var view = new SceneView({container: "viewDiv",map: scene,camera: camera});
  
  view.when(function() {var featureLayer = scene.layers.getItemAt(1);var legend = new Legend({view: view,layerInfos: [{layer: featureLayer,title: "Hazards of the Cascades Arc"}]});
  view.ui.add(legend, "bottom-left");
  
  var layerList = new LayerList({view: view});
  view.ui.add(layerList, "bottom- right");});
      
	var homeBtn = new Home({view: view});
  view.ui.add(homeBtn, "top-left");});

