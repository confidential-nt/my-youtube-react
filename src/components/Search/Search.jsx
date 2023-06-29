import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleChange} value={keyword} />
        <button type="submit">검색</button>
      </form>
    </header>
  );
}
