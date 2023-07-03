import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  return (
    <header className="max-w-5xl mr-auto ml-auto flex items-center pt-3 pb-3 border-b border-yt-grey">
      <Link to="/" className="mr-10 md:mr-48 flex">
        <BsYoutube size="2em" className="text-yt-red mr-2" />
        <h1 className="text-white capitalize weight text-2xl">youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex w-2/4">
        <input
          type="search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          className="focus:outline-none block grow bg-black pt-1 pb-1 pl-1 text-white"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-yt-grey block w-9 flex items-center justify-center"
        >
          <BsSearch className="text-white" />
        </button>
      </form>
    </header>
  );
}
