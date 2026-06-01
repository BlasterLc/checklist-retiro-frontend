import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import CheckIn from "../pages/CheckIn/CheckIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contacto from "../pages/Contacto/Contacto";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;