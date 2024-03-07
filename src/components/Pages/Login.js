import React from "react";
import './Login.css';

export const Login = () => {
  return (
    <div className="loginCard">
      <h2>Discord Login</h2>
      <p>To continue, you need to login with your Discord account</p>
      <a href="https://discord.com/oauth2/authorize?client_id=889540062956634164&response_type=code&redirect_uri=https%3A%2F%2Fapi.kotone.tech%2Foauth%2Fcallback&scope=identify+guilds+guilds.join">Login with Discord</a>
    </div>
  );
};
