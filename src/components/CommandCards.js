import React, { useState, useEffect } from "react";

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

  const filteredCommands = Array.isArray(commands)
    ? commands.filter((command) =>
        command.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search commands"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="font-semibold dark:text-black text-white rounded-md p-2 text-center px-12"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 m-4">
        {filteredCommands.map((command, index) => (
          <div key={index} className="bg-gray-700 m-4 p-4 rounded-xl">
            <h3 className="text-white sm:text-2xl font-semibold">/{command.name}</h3>
            <p className="text-gray-300">{command.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandCards;
