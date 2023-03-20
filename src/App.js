import { Routes, Route } from "react-router-dom";
import AddMitarbeiter from "./components/AddMitarbeiter";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/AddMitarbeiter" element={<AddMitarbeiter />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
