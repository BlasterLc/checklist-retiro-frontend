import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { useRetiros } from "../../context/RetiroContext";

function GraficoEstados() {

  const { retiros } = useRetiros();

  const aprobados = retiros.filter(
    r => r.estado === "Aprobado"
  ).length;

  const rechazados = retiros.filter(
    r => r.estado === "Rechazado"
  ).length;

  const data = [
    {
      name: "Aprobados",
      value: aprobados
    },
    {
      name: "Rechazados",
      value: rechazados
    }
  ];

  const COLORS = [
    "#28a745",
    "#dc3545"
  ];

  return (

    <div className="grafico-card">

      <h2>Aprobados vs Rechazados</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default GraficoEstados;