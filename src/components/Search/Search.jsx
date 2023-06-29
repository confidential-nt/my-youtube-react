import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <button type="submit">검색</button>
      </form>
    </header>
  );
}
