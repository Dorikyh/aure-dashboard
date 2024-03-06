import React from "react";
import CommandCards from "../CommandCards.js";

const Commands = () => {
  return (
    <div>
      <div className="infoMain">
        <h1>Commands Page</h1>
        <p>Here you can see all the commands available for Kotone Bot.</p>
      </div>
      <CommandCards />
    </div>
  );
};

export default Commands;
