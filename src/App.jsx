import React, { useState } from "react";
import "./app.css";
import { Users } from "./user";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
console.log(query)
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
