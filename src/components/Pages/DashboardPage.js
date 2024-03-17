import React, { useEffect } from "react";
import SideBar from "../SideBar.js";

export const Dashboard = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      // Save the token in the webpage data
      localStorage.setItem("jwtToken", token);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <SideBar />
      <main>
        <div>
          <h1>Hello world</h1>
          {/* Agrega aquí más información del usuario según lo que devuelva la API */}
        </div>
      </main>
    </div>
  );
};