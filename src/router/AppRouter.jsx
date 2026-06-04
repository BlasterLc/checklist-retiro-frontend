import { Routes, Route, Navigate } from "react-router-dom";

import NuevoRetiro from "../pages/NuevoRetiro";
import Dashboard from "../pages/Dashboard";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/retiro"
        element={<NuevoRetiro />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/contacto"
        element={<Contacto />}
      />

    </Routes>
  );
}

export default AppRouter;