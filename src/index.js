// import {
//     Ion,
//     Viewer,
//     CesiumTerrainProvider,
//     IonImageryProvider,
//     Cartesian3,
//     Cesium3DTileStyle,
//     // Cesium,
//     Cesium3DTileset,
//     Math,
//   } from "cesium";
// import "cesium/Widgets/widgets.css";
// import "../src/css/main.css";
  
//   // Your access token can be found at: https://cesium.com/ion/tokens.
 
// Ion.defaultAccessToken =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhN2NlM2ExZS00NzY4LTQ5MjAtYWU1YS1hODczMTYzOGRkNjEiLCJpZCI6MjAyNDAyLCJpYXQiOjE3MTA2MjYwNTd9.idrzLNaH8vHDenhi_z3gjnX9py9F-u8CVokhvHnpvss";

// // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
// const viewer = new Viewer("cesiumContainer");

// try {
//     const ortho = viewer.imageryLayers.addImageryProvider(
//         await IonImageryProvider.fromAssetId(2504848),
//     );
//     await viewer.zoomTo(ortho);
//     } catch (error) {
//     console.log(error);
// }


// try {
//     const dem = viewer.imageryLayers.addImageryProvider(
//     await IonImageryProvider.fromAssetId(2504839),
//     );
//     await viewer.zoomTo(dem);
// } catch (error) {
//     console.log(error);
// }
  
  



// // Fly the camera to San Francisco at the given longitude, latitude, and height.
// // viewer.camera.flyTo({
// // destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
// // orientation: {
// //     heading: Math.toRadians(0.0),
// //     pitch: Math.toRadians(-15.0),
// // },
// // });




import {
    Ion,
    Viewer,
    CesiumTerrainProvider,
    IonImageryProvider,
    Cartesian3,
    Cesium3DTileStyle,
  } from "cesium";
  import "cesium/Widgets/widgets.css";
  import "../src/css/main.css";
  
  // Your access token can be found at: https://cesium.com/ion/tokens.
  Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhN2NlM2ExZS00NzY4LTQ5MjAtYWU1YS1hODczMTYzOGRkNjEiLCJpZCI6MjAyNDAyLCJpYXQiOjE3MTA2MjYwNTd9.idrzLNaH8vHDenhi_z3gjnX9py9F-u8CVokhvHnpvss";
  
  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
  const viewer = new Viewer("cesiumContainer");
  
  let orthoLayer;
  let demLayer;
  
  async function addOrthoLayer() {
    try {
      orthoLayer = viewer.imageryLayers.addImageryProvider(
        await IonImageryProvider.fromAssetId(2504848)
      );
      await viewer.zoomTo(orthoLayer);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function addDemLayer() {
    try {
      demLayer = viewer.imageryLayers.addImageryProvider(
        await IonImageryProvider.fromAssetId(2504839)
      );
      await viewer.zoomTo(demLayer);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function removeOrthoLayer() {
    if (orthoLayer) {
      viewer.imageryLayers.remove(orthoLayer);
      orthoLayer = undefined;
    }
  }
  
  async function removeDemLayer() {
    if (demLayer) {
      viewer.imageryLayers.remove(demLayer);
      demLayer = undefined;
    }
  }
  
  document.getElementById("dem").addEventListener("click", function () {
    if (demLayer) {
      removeDemLayer();
    } else {
      addDemLayer();
    }
  });
  
  document.getElementById("ortho-img").addEventListener("click", function () {
    if (orthoLayer) {
      removeOrthoLayer();
    } else {
      addOrthoLayer();
    }
  });
  