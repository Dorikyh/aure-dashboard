import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "react-feather";

const Status = () => {
  const [botStatus, setBotStatus] = useState("Loading");
  const [apiStatus, setApiStatus] = useState("Loading");
  const [dashboardStatus, setWebStatus] = useState("Loading");
  const [uptime, setUptime] = useState("");

  useEffect(() => {
    document.title = "Status - Kotone"; // Actualiza el título de la página

    const fetchStatuses = async () => {
      try {
        const [botResponse, apiResponse, webResponse] = await Promise.all([
          // Fetch del estado del bot de Discord
          fetch("https://discord.com/api/guilds/946513035936301157/widget.json"),
          // Fetch del estado de la API
          fetch("https://api.dorikyh.pw/bot/status"),
          // Fetch del estado del sitio web
          fetch("https://www.kotone.tech")
        ]);

        if (botResponse.ok) {
          const data = await botResponse.json();
          const bot = data.members.find(member => member.username === "Kotone");
          setBotStatus(bot ? "Online" : "Offline"); // Actualiza el estado del bot
        } else {
          setBotStatus("Offline");
        }

        if (apiResponse.ok) {
          const data = await apiResponse.json();
          setApiStatus("Online");
          setUptime(data.uptime);
        } else {
          setApiStatus("Offline");
        }

        setWebStatus(webResponse.ok ? "Online" : "Offline"); // Actualiza el estado del sitio web
      } catch (error) {
        console.error("Error fetching statuses:", error);
        // Establece los estados en Offline en caso de error
        setBotStatus("Offline");
        setApiStatus("Offline");
        setWebStatus("Offline");
      }
    };

    fetchStatuses(); // Llama a la función para obtener los estados
  }, []);

  const formatUptime = (uptime) => {
    // Separar horas, minutos, segundos y microsegundos
    const [hours, minutes] = uptime.split(':');

    // Devolver la cadena formateada
    return `${hours} hours and ${minutes} minutes`;
  };

  return (
    <div>
      <div>
        <h1 className="text-6xl sm:text-7xl font-semibold text-center dark:text-white">Realtime Status</h1>
        <p className="text-center dark:text-white">Technical information about Kotone in realtime.</p>
      </div>
      <main className="-col md:flex-row">
        <div>
          <div className="bg-gray-300 dark:bg-gray-800 rounded-2xl m-8 p-10 bg-gray-200">
            {apiStatus === "Online" ? (
              <div className="text-center">
                <CheckCircle size={100} color="#77DD77" className="m-auto mb-4" />
                <div className="w-64 mx-auto">
                  <h2 className="dark:text-white text-4xl font-semibold mb-2">Bot Online!</h2>
                  <p className="text-xl dark:text-gray-400 font-semibold">{formatUptime(uptime)}</p>
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
        <div className="">
          <div className="bg-gray-300 dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">Discord Bot</h2>
            <p className="text-3xl font-semibold" style={{ color: botStatus === "Online" ? "#77DD77" : "#ff6961" }}>{botStatus}</p>
          </div>

          <div className="bg-gray-300 dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">API</h2>
            <p className="text-3xl font-semibold" style={{ color: apiStatus === "Online" ? "#77DD77" : "#ff6961" }}>{apiStatus}</p>
          </div>
        </div>

        <div className="">
          <div className="bg-gray-300 dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">Website</h2>
            <p className="text-3xl font-semibold" style={{ color: dashboardStatus === "Online" ? "#77DD77" : "#ff6961" }}>{dashboardStatus}</p>
          </div>

          <div className="bg-gray-300 dark:bg-gray-800 rounded-2xl m-8 p-8 bg-gray-200">
            <h2 className="dark:text-white text-4xl font-semibold">AutoPost</h2>
            <p className="text-3xl font-semibold" style={{ color: apiStatus === "Online" ? "#77DD77" : "#ff6961" }}>{apiStatus}</p>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Status;