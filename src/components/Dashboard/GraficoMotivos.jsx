import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { useRetiros } from "../../context/RetiroContext";

function GraficoMotivos() {

  const { retiros } = useRetiros();

  const conteo = {};

  retiros.forEach(retiro => {

    if (
      retiro.estado === "Rechazado"
    ) {

      conteo[retiro.motivo] =
        (conteo[retiro.motivo] || 0) + 1;
    }

  });

  const data = Object.keys(conteo).map(
    motivo => ({
      motivo,
      cantidad: conteo[motivo]
    })
  );

  return (

    <div className="grafico-card">

      <h2>Motivos de Rechazo</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="motivo" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="cantidad" 
          fill="#1976d2"/>

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default GraficoMotivos;