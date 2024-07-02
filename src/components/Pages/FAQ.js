import React, { useEffect } from "react";


const Commands = () => {
  useEffect(() => {
    document.title = "FAQ - Kotone";
  }, []);
  return (
    <div>
      <div className="dark:bg-gray-900">
        <h1 className="dark:text-white sm:text-7xl text-6xl font-semibold text-center m-6">Frequently Asked Questions</h1>
        <p className="text-center dark:text-white mb-8">Is normal to have questions, so here you will get information about Kotone usage.</p>


      </div>
      
    </div>
  );
};

export default Commands;
