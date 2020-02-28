import React from "react";
import logout from "../../../services/logout";

const HeaderLoggedIn = () => (
  <header>
    <div className="header_content">
      <span>BitBook</span>
      <div>
        <button>Search Users</button>
        <button>My Profile</button>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    </div>
  </header>
);

export default HeaderLoggedIn;
