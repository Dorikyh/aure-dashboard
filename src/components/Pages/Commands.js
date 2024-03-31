import React, { useEffect } from "react";
import CommandCards from "../CommandCards.js";


const Commands = () => {
  useEffect(() => {
    document.title = "Commands - Kotone";
  }, []);
  return (
    <div>
      <div className="dark:bg-gray-900 py-12">
        <h1 className="dark:text-white sm:text-7xl text-6xl font-semibold text-center m-6">Commands Page</h1>
        <p className="text-center dark:text-white mb-8">Here you can see all the commands available for Kotone Bot.</p>

        <CommandCards />
      </div>
      
    </div>
  );
};

export default Commands;
