import React from "react";
import SideBar from "../SideBar.js";

export const Dashboard = () => {
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