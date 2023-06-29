import Search from "./components/Search/Search";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Search />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
