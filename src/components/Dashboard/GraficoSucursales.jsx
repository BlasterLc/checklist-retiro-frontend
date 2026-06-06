import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { useRetiros } from "../../context/RetiroContext";

function GraficoSucursales() {

  const { retiros } = useRetiros();

  const resumen = {};

  retiros.forEach((retiro) => {

    const sucursal =
      retiro.sucursal || "Sin sucursal";

    resumen[sucursal] =
      (resumen[sucursal] || 0) + 1;

  });

  const data = Object.entries(resumen).map(
    ([nombre, cantidad]) => ({
      nombre,
      cantidad
    })
  );

  return (

    <div className="grafico-card">

      <h3>Retiros por Sucursal</h3>

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
            fill="#1976d2"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default GraficoSucursales;