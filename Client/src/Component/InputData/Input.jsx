import React, { useState } from "react";
import axios from "axios";
import "./Input.css";

const Input = () => {
  const post_url = "https://tava-company-task-2.onrender.com/api/chat";

  const [search, setSearch] = useState("");
  const [chatData, setChatData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) {
      alert("Please enter a message");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(post_url, {
        message: search,
      });

      setChatData(res.data);
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="search-card">
        <h2>AI Chat Search</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter table, chart, grid, summary..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={handleSearch}>
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </div>

      {chatData && (
        <div className="response-card">
          <h3>Response</h3>

          <div className="response-content">
            <pre>{JSON.stringify(chatData, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;