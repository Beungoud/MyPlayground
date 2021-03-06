import React, { Component } from "react";
import Map from "../components/LeafletMap";
import { geolocated } from "react-geolocated";
import { relative } from "path";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playgrounds: []
    };
  }
  positionUpdated = bbox => {
    console.log(bbox);
    this.refreshData(bbox);
  };

  refreshData = bounds => {
    const request = `[bbox:${bounds._southWest.lat},${bounds._southWest.lng},${
      bounds._northEast.lat
    },${
      bounds._northEast.lng
    }][out:json][timeout:25];(node["leisure"="playground"];way["leisure"="playground"];);out center;`;
    console.log(request);
    fetch(
      `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        request
      )}`
    )
      .then(reply => reply.json())
      .then(reply => {
        console.log(reply);

        const playgrounds = reply.elements.map(element => {
          if (element.type === "node") {
            return [element.lat, element.lon];
          }
          if (element.type === "way") {
            return [element.center.lat, element.center.lon];
          }
          return undefined;
        });
        this.setState({ playgrounds });
      });
  };

  render() {
    const { playgrounds } = this.state;
    return (
        <Map
          {...this.props}
          onPositionUpdated={this.positionUpdated}
          playgrounds={playgrounds}
        />
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  watchPosition: false,
  userDecisionTimeout: 5000
})(Main);
