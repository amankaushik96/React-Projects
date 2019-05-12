import React from "react";
import ReactDOM from "react-dom";
//import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div
      className="ui container comments"
      style={{ top: "50px", position: "relative" }}
    >
      <ApprovalCard id="firstComment">
        <CommentDetail author="aman" date="10/5/2019" text="Nice One!" />
      </ApprovalCard>
      <ApprovalCard id="secondComment">
        <CommentDetail author="kaushik" date="20/01/1999" text="Awesome man!" />
      </ApprovalCard>
      <ApprovalCard id="thirdComment">
        <CommentDetail
          author="Sumeet"
          date="01/01/2000"
          text="Its the begining"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
