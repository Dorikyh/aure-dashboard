import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>Made by <a href='https://dorikyh.xyz'>Dorikyh</a> using ReactJS and FastAPI.</p>

            <div className='footer-links'>
                <a href='home'>Home</a>
                <a href='commands'>Commands</a>
                <a href='status'>Status</a>
                <a href='dashboard'>Dashboard</a>
            </div>
        </footer>
    );
};

export default Footer;