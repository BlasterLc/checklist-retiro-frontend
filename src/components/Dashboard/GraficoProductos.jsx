import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { useRetiros } from "../../context/RetiroContext";

function GraficoProductos() {

  const { retiros } = useRetiros();

  const resumen = {};

  retiros.forEach((retiro) => {

    if (!retiro.producto) return;

    const nombre =
      retiro.producto.nombre;

    resumen[nombre] =
      (resumen[nombre] || 0) + 1;

  });

  const data = Object.entries(resumen).map(
    ([nombre, cantidad]) => ({
      nombre,
      cantidad
    })
  );

  return (

    <div className="grafico-card">

      <h3>Productos Más Retirados</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="nombre" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="cantidad" 
          fill="#1976d2"/>

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default GraficoProductos;