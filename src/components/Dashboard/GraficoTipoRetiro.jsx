import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

import { useRetiros } from "../../context/RetiroContext";

function GraficoTipoRetiro() {

  const { retiros } = useRetiros();

  const titulares = retiros.filter(
    r => r.tipoRetiro === "titular"
  ).length;

  const terceros = retiros.filter(
    r => r.tipoRetiro === "tercero"
  ).length;

  const data = [
    {
      name: "Titular",
      value: titulares
    },
    {
      name: "Tercero",
      value: terceros
    }
  ];

  const COLORS = [
    "#1976d2",
    "#ff9800"
  ];

  return (

    <div className="grafico-card">

      <h3>Tipo de Retiro</h3>

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

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default GraficoTipoRetiro;