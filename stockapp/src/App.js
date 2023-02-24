import {Route, Routes} from "react-router-dom"
import './App.css';
import data from "./data"

import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/stocks/:symbol" element={<Stock />}/>
        <Route path="/stocks" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
