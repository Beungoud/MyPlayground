import React, { createRef } from "react";
import {
    interaction, layer, custom, control, //name spaces
    Interactions, Overlays, Controls,     //group
    Map, Layers, Overlay, Util    //objects
  } from "react-openlayers";

class MyMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Coucou");

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderStyle: "dashed"
        }}
      >
        Coucou
        <Map  style={{
          position: "relative",
          width: "100%",
          height: "100%",
        //   borderStyle: "dashed"
          
        }}
         view={{ center: [0, 0], zoom: 2 }} >
          <Layers>
            <layer.Tile />
            {/* <layer.Vector source={markers} style={markers.style} zIndex="1" /> */}
          </Layers>
          {/* <Overlays>
            <Overlay ref={comp => (this.overlayComp = comp)} element="#popup" />
          </Overlays> */}
          {/* <Controls attribution={false} zoom={true}>
            <control.Rotate />
            <control.ScaleLine />
            <control.FullScreen />
            <control.OverviewMap />
            <control.ZoomSlider />
            <control.ZoomToExtent />
            <control.Zoom />
          </Controls> */}
          {/* <Interactions>
            <interaction.Select style={selectedMarkerStyle} />
            <interaction.Draw source={markers} type="Point" />
            <interaction.Modify features={markers.features} />
          </Interactions> */}
        </Map>
      </div>
    );
  }
}

export default MyMap;
