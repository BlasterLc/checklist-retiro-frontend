import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { useRetiros } from "../../context/RetiroContext";

function GraficoOperadores() {

  const { retiros } = useRetiros();

  const resumen = {};

  retiros.forEach((retiro) => {

    const operador =
      retiro.operador || "Sin operador";

    resumen[operador] =
      (resumen[operador] || 0) + 1;

  });

  const data = Object.entries(resumen).map(
    ([nombre, cantidad]) => ({
      nombre,
      cantidad
    })
  );

  return (

    <div className="grafico-card">

      <h3>Retiros por Operador</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="nombre" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="cantidad"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default GraficoOperadores;