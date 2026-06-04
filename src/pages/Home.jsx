import { Link } from "react-router-dom";

import GraficoEstados from "../components/Dashboard/GraficoEstados";
import GraficoMotivos from "../components/Dashboard/GraficoMotivos";
import TablaRetiros from "../components/Dashboard/TablaRetiros";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="logo-placeholder">

          LOGO EMPRESA

        </div>

        <h1>
          Bienvenido al Sistema de Control de Entregas
        </h1>

        <p>
          Plataforma de validación documental y
          control de retiros de productos.
        </p>

        <div className="hero-buttons">

          <Link
            to="/retiro"
            className="btn-home"
          >
            Iniciar Retiro
          </Link>

          <Link
            to="/contacto"
            className="btn-home"
          >
            Contacto
          </Link>

        </div>

      </section>

      <section className="home-metricas">

        <h2>Resumen Operacional</h2>

        <TablaRetiros />


      </section>

    </div>
  );
}

export default Home;