import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./MobBar.css";

import { Link } from "react-router-dom";
import Feedback from "./Feedback";
const MobBar = () => {
  return (
    <div className="search-small-heading">
      <div className="feedback-btn">
        <Feedback />
      </div>
      <div className="input-and-icon">
        <input
          className="search-small-input"
          type="text"
          placeholder=" search"
        />
        <SearchIcon className="icon-small"> </SearchIcon>
      </div>
      <div className="saved-items">
        <Link to="/about">
          {" "}
          <span> The Team</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default MobBar;
