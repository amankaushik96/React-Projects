import React from "react";
import SongsList from "./SongsList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "20px" }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
