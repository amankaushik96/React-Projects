import React from "react";

const ApprovalCard = props => {
  return (
    <div
      className="ui card"
      onClick={() => {
        let className = document.getElementById(props.id).className;
        className === "ui basic green button"
          ? (className = "ui basic red button")
          : (className = "ui basic green button");
        document.getElementById(props.id).className = className;
      }}
    >
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button" id={props.id}>
            Approve
          </div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
