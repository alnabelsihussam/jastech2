import { Routes, Route } from "react-router-dom";
import AddMitarbeiter from "./components/AddMitarbeiter";
import Mitarbeiter from "./Pages/Mitarbeiter";
import Geräte from "./Pages/Geräte";

import AddGereat from "./components/AddGereat";

import Home from "./components/Home";
import Header from "./components/Layout/Header";
import updateMitarbeiter from "./components/updateMitarbeiter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Mitarbeiter" element={<Mitarbeiter />} />
      <Route path="/AddMitarbeiter" element={<AddMitarbeiter />} />
      <Route path="/updateMitarbeiter" element={<updateMitarbeiter />} />

      <Route path="/Geräte" element={<Geräte />} />
      <Route path="/AddGereat" element={<AddGereat />} />
    </Routes>
  );
}

export default App;
