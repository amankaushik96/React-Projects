import React from "react";
import "./App.css";

class ResultDisplay extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="inputBox" value={this.props.val} />
      </div>
    );
  }
}

export default ResultDisplay;
