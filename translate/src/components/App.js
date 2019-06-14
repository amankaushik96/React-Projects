import React from "react";
import Usercreate from "./Usercreate";
import LanguageContext from "../context/LanguageContext";

class App extends React.Component {
  state = {
    language: "english"
  };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <Usercreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
