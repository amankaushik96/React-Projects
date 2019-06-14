import { Map, GoogleApiWrapper } from "google-maps-react";
import React from "react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapComponent extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{
          lat: 29.3255,
          lng: 76.2998
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCmzCy0kq2urXgKh9IY-KHrO7klu4kw3YE" //AIzaSyDIjLbi4wfaPiaDAd7zq_aJAkOcoY_4ltg
})(MapComponent);
