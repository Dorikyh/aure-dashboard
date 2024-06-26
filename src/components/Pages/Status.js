import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "react-feather";

export const Status = () => {
  const [botStatus, setBotStatus] = useState("Loading");
  const [apiStatus, setApiStatus] = useState("Loading");
  const [dashboardStatus, setWebStatus] = useState("Loading");

  useEffect(() => {
    const fetchBotStatus = async () => {
      try {
        const response = await fetch("https://api.kotone.tech");
        if (response.ok) {
          setBotStatus("Online");
        } else {
          setBotStatus("Offline");
        }
      } catch (error) {
        console.error("Error fetching bot status:", error);
        setBotStatus("Offline");
      }
    };

    const fetchApiStatus = async () => {
      try {
        const response = await fetch("https://api.kotone.tech");
        if (response.ok) {
          setApiStatus("Online");
        } else {
          setApiStatus("Offline");
        }
      } catch (error) {
        console.error("Error fetching API status:", error);
        setApiStatus("Offline");
      }
    };

    const fetchWebStatus = async () => {
      try {
        const response = await fetch("https://www.kotone.tech");
        if (response.ok) {
          setWebStatus("Online");
        } else {
          setWebStatus("Offline");
        }
      } catch (error) {
        console.error("Error fetching Website status:", error);
        setWebStatus("Offline"); 
      }
    };

    fetchBotStatus();
    fetchApiStatus();
    fetchWebStatus();

    document.title = "Status - Kotone"
  }, []);

  return (
    <div className="dark:bg-gray-900 py-10">
      <div>
        <h1 className="text-6xl sm:text-7xl font-semibold text-center dark:text-white pt-8 pb-2">Realtime Status</h1>
        <p className="text-center dark:text-white">Tecnical information about Kotone in realtime.</p>
      </div>
      <main className="flex flex-col md:flex-row">
        <div>
          <div className="dark:bg-gray-800 rounded-2xl m-8 p-10 bg-gray-200">
            {apiStatus === "Online" ? (
              <div className="text-center">
                <CheckCircle size={100} color="#77DD77" className="m-auto mb-4" />
                <div className="w-64 mx-auto">
                  <h2 className="dark:text-white text-4xl font-semibold mb-2">All good!</h2>
                  <p className="text-xl dark:text-gray-400 font-semibold">Updated right now</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <XCircle size={100} color="#ff6961" className="m-auto mb-4"/>
                <div className="w-64 mx-auto">
                  <h2 className="dark:text-white text-4xl font-semibold mb-2">System is down!</h2>
                  <p className="text-xl dark:text-gray-400 font-semibold">Unable to update</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* Contenido para la primera columna */}
          <div className="dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">Discord Bot</h2>
            <p className="text-3xl font-semibold" style={{ color: botStatus === "Online" ? "#77DD77" : "#ff6961" }}>{botStatus}</p>
          </div>
          <div className="dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">Database</h2>
            <p className="text-3xl font-semibold" style={{ color: apiStatus === "Online" ? "#77DD77" : "#ff6961" }}>{apiStatus}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* Contenido para la segunda columna */}
          <div className="dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">Dashboard </h2>
            <p className="text-3xl font-semibold" style={{ color: dashboardStatus === "Online" ? "#77DD77" : "#ff6961" }}>{dashboardStatus}</p>
          </div>
          <div className="dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">Auto Post </h2>
            <p className="text-3xl font-semibold" style={{ color: dashboardStatus === "Online" ? "#77DD77" : "#ff6961" }}>{dashboardStatus}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Status
