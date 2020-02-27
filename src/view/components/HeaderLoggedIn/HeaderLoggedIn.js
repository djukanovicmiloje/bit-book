import React from "react";
import logout from "../../../services/logout";

const HeaderLoggedIn = () => (
  <header>
    <div>
      <span>BitBook</span>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  </header>
);

export default HeaderLoggedIn;
