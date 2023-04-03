import { Routes, Route } from "react-router-dom";
import AddMitarbeiter from "./components/AddMitarbeiter";
import Mitarbeiter from "./Pages/Mitarbeiter";
import Geräte from "./Pages/Geräte";

import AddGereat from "./components/AddGereat";

import Home from "./components/Home";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Routes>
      <Route path="/Mitarbeiter" element={<Mitarbeiter />} />

      <Route path="/Geräte" element={<Geräte />} />
      <Route path="/AddMitarbeiter" element={<AddMitarbeiter />} />

      <Route path="/" element={<Home />} />
      <Route path="/AddGereat" element={<AddGereat />} />
    </Routes>
  );
}

export default App;
