import React from "react";
import MapComponent from "./MapComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: "1px" }}>
          <div
            style={{
              display: "flex",
              height: "50%",
              width: "50%",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MapComponent />
          </div>
          <div
            className="ui icon input fluid"
            style={{
              marginLeft: "60px",
              marginRight: "60px",
              marginTop: "30px",
              boxSizing: "border-box"
            }}
          >
            <input type="text" placeholder="Search..." />
            <i className="search icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
