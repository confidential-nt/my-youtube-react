import Search from "./components/Search/Search";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-yt-black">
      <Search />
      <main className="max-w-5xl mr-auto ml-auto mt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
