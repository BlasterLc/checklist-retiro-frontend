import TablaRetiros from "../components/Dashboard/TablaRetiros";
import { useRetiros } from "../context/RetiroContext";

function Dashboard() {

  const { retiros } = useRetiros();

  const totalRetiros = retiros.length;

  const aprobados = retiros.filter(
    retiro => retiro.estado === "Aprobado"
  ).length;

  const rechazados = retiros.filter(
    retiro => retiro.estado === "Rechazado"
  ).length;

  const tasaAprobacion =
    totalRetiros > 0
      ? ((aprobados / totalRetiros) * 100).toFixed(1)
      : 0;

  return (

    <div className="dashboard">

      <h1>Dashboard de Métricas</h1>

      <div className="cards-metricas">

        <div className="card-metrica">
          <h3>Total Retiros</h3>
          <p>{totalRetiros}</p>
        </div>

        <div className="card-metrica">
          <h3>Aprobados</h3>
          <p>{aprobados}</p>
        </div>

        <div className="card-metrica">
          <h3>Rechazados</h3>
          <p>{rechazados}</p>
        </div>

        <div className="card-metrica">
          <h3>Tasa Aprobación</h3>
          <p>{tasaAprobacion}%</p>
        </div>

      </div>

      <TablaRetiros />

    </div>

  );
}

export default Dashboard;