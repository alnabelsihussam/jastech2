import { Routes, Route } from "react-router-dom";
import AddMitarbeiter from "./components/AddMitarbeiter";
import AddGereat from "./components/AddGereat";

import Home from "./components/Home";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Routes>
      <Route path="/AddMitarbeiter" element={<AddMitarbeiter />} />

      <Route path="/" element={<Home />} />
      <Route path="/AddGereat" element={<AddGereat />} />
    </Routes>
  );
}

export default App;
