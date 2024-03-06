import React, { useState, useEffect } from "react";
import "./Status.css";

export const Status = () => {
  const [botStatus, setBotStatus] = useState("Loading...");
  const [apiStatus, setApiStatus] = useState("Loading...");
  const [dashboardStatus, setDashboardStatus] = useState("Loading...");

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
        const response = await fetch("URL_DE_TU_API");
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

    // Llama a las funciones de solicitud al cargar el componente
    fetchBotStatus();
    fetchApiStatus();
  }, []);

  return (
    <div>
      <div className="infoMain">
        <h1>Realtime Status</h1>
        <p>Tecnical information about Kotone and realtime status.</p>
      </div>
      <main>
        <div className="card">
          <h2>Bot Status</h2>
          <p style={{ color: botStatus === "Online" ? "green" : "red" }}>{botStatus}</p>
        </div>
        <div className="card">
          <h2>API Status</h2>
          <p style={{ color: apiStatus === "Online" ? "green" : "red" }}>{apiStatus}</p>
        </div>
        <div className="card">
          <h2>Dashboard Status</h2>
          <p style={{ color: dashboardStatus === "Online" ? "green" : "red" }}>{dashboardStatus}</p>
        </div>
      </main>
    </div>
  );
};
