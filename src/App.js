import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Espace from "./Pages/Espace";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import Immobilier from "./Pages/Immobilier";
import Loisir from "./Pages/Loisir";
import Event from "./Pages/Event";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} className="NavBarApp" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="espace" element={<Espace />} />
        <Route exact path="/immobilier" element={<Immobilier />} />
        <Route exact path="/loisir" element={<Loisir />} />
        <Route exact path="/event" element={<Event />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
