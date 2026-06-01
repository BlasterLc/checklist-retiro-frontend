import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/retiro">Nuevo Retiro</Link>

      <Link to="/dashboard">
        Métricas
      </Link>
    </nav>
  );
}

export default Navbar;