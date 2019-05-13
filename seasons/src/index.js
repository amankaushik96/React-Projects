import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessage}</div>;
    else if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />;
    else return <Loader loadingText="Please choose a response..." />;
  }

  render() {
    return (
      <div
        style={{
          border: " solid red 5px",
          height: "100vh"
        }}
      >
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
