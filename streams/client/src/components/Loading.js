import React from "react";
import ReactDOM from "react-dom";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals invisible active">
      <div>
        <div className="ui active dimmer">
          <div className="ui massive text loader">Loading</div>
        </div>
        <p />
        <p />
        <p />
      </div>
    </div>,
    document.querySelector("#loading")
  );
};

export default Loading;
