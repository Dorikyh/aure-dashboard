import React, { useState, useEffect } from "react";


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
        // Aquí reemplaza la URL con la de tu API
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
        // Aquí reemplaza la URL con la de tu API
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

    // Llama a las funciones de solicitud al cargar el componente
    fetchBotStatus();
    fetchApiStatus();
    fetchWebStatus();
  }, []);

  return (
    <div className="dark:bg-gray-900 py-10">
      <div>
        <h1 className="text-6xl sm:text-7xl font-semibold text-center dark:text-white p-12">Realtime Status</h1>
        <p className="text-center dark:text-white mx-8">Tecnical information about Kotone in realtime.</p>
      </div>
      <main>
        <div className="dark:bg-gray-800 rounded-2xl m-10 p-10 bg-gray-400">
          <h2 className="dark:text-white text-4xl font-semibold">Bot Status</h2>
          <p className="text-3xl font-semibold" style={{ color: botStatus === "Online" ? "#77DD77" : "#ff6961" }}>{botStatus}</p>
        </div>
        <div className="dark:bg-gray-800 rounded-2xl m-10 p-10 bg-gray-400">
          <h2 className="dark:text-white text-4xl font-semibold">API Status</h2>
          <p className="text-3xl font-semibold" style={{ color: apiStatus === "Online" ? "#77DD77" : "#ff6961" }}>{apiStatus}</p>
        </div>
        <div className="dark:bg-gray-800 rounded-2xl m-10 p-10 bg-gray-400">
          <h2 className="dark:text-white text-4xl font-semibold">Dashboard Status</h2>
          <p className="text-3xl font-semibold" style={{ color: dashboardStatus === "Online" ? "#77DD77" : "#ff6961" }}>{dashboardStatus}</p>
        </div>
      </main>
    </div>
  );
};
