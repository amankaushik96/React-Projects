import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui  secondary pointing menu" style={{ paddingTop: "10px" }}>
      <Link
        to="/"
        className="ui icon button"
        style={{ position: "absolute", left: "35%", width: "30%" }}
      >
        Streamy
      </Link>
      <div className="right menu">
        <span>
          <GoogleAuth />
        </span>
      </div>
    </div>
  );
};

export default Header;
