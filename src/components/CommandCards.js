import React, { useState, useEffect } from "react";
import "./Cards.css";

const CommandCards = () => {
  const [commands, setCommands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCommands();
  }, []);

  const fetchCommands = async () => {
    try {
      const response = await fetch("https://api.kotone.tech/commands");
      const data = await response.json();
      setCommands(data);
    } catch (error) {
      console.error("Error fetching commands:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter commands based on search query
  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search commands"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="cards-container">
        {filteredCommands.map((command, index) => (
          <div key={index} className="command-card">
            <h3>/{command.name}</h3>
            <p>{command.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandCards;
