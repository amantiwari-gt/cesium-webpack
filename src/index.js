import {
    Ion,
    Viewer,
    CesiumTerrainProvider,
    Cartesian3,
    Math,
  } from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css";
  
  // Your access token can be found at: https://cesium.com/ion/tokens.
 
Ion.defaultAccessToken =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhN2NlM2ExZS00NzY4LTQ5MjAtYWU1YS1hODczMTYzOGRkNjEiLCJpZCI6MjAyNDAyLCJpYXQiOjE3MTA2MjYwNTd9.idrzLNaH8vHDenhi_z3gjnX9py9F-u8CVokhvHnpvss";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer");

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
orientation: {
    heading: Math.toRadians(0.0),
    pitch: Math.toRadians(-15.0),
},
});



