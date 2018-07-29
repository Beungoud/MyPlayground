import React, {  createRef } from "react";
import {  Icon } from "semantic-ui-react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

const playGroundIcon = new Leaflet.Icon({
  iconUrl: require("./icons/playground2.png"),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [40, 0]
});
const userIcon = new Leaflet.Icon({
  iconUrl: require("./icons/location.png"),
  iconSize: [30, 30],
  iconAnchor: [15, 25],
  popupAnchor: [20, 0]
});
class MyMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 44,
      lng: 1.1,
      zoom: 13
    };
  }
  mapRef = createRef();

  static getDerivedStateFromProps(props, state) {
    return {
      hasLocation: props.coords ? true : false,
      lat: props.coords ? props.coords.latitude : 44,
      lng: props.coords ? props.coords.longitude : 1.4,
      zoom: props.coords ? 16 : 10
    };
  }

  markersFromPlaygrounds = () => {
    const { playgrounds } = this.props;
    return (
      <div>
        {playgrounds.map((playground, index) => (
          <Marker  key={index} icon={playGroundIcon} position={playground}>
            {" "}
          </Marker>
        ))}
      </div>
    );
  };

  render() {
    const { onPositionUpdated } = this.props;
    const position = [this.state.lat, this.state.lng];
    const marker = this.state.hasLocation ? (
      <Marker position={position} icon={userIcon}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>
    ) : null;
    const playGrounds = this.markersFromPlaygrounds();
    return (
      <div>
        <Map
          onZoomend={event => onPositionUpdated(event.target.getBounds())}
          onMoveend={event => onPositionUpdated(event.target.getBounds())}
          ref={this.mapRef}
          center={position}
          zoom={this.state.zoom}
          style={{ width: "100%", height: 400 }}
        >
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker}
          {playGrounds}
          <div className="leaflet-top leaflet-left">
            <div
              className="leaflet-bar leaflet-control"
              style={{ marginTop: "80px" }}
            >
              <a
                href="#"
                onClick={() => {
                  if (this.state.hasLocation)
                    this.mapRef.current.leafletElement.panTo(position);
                }}
              >
                <Icon
                  name="dot circle outline"
                  style={{ fontSize: "1.3em", marginLeft: "4px" }}
                />
              </a>
            </div>
          </div>
        </Map>
      </div>
    );
  }
}

export default MyMap;
