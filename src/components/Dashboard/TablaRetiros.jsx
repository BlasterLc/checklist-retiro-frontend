import { useRetiros } from "../../context/RetiroContext";

function TablaRetiros() {

  const { retiros } = useRetiros();

  const ultimosRetiros = retiros.slice(0, 10);

  return (

    <div className="tabla-retiros">

      <h2>Últimos 10 Retiros</h2>

      <table>

        <thead>

          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Documento</th>
            <th>Producto</th>
            <th>Estado</th>
          </tr>

        </thead>

        <tbody>

          {ultimosRetiros.length === 0 ? (

            <tr>
              <td colSpan="5">
                No existen retiros registrados
              </td>
            </tr>

          ) : (

            ultimosRetiros.map(retiro => (

              <tr key={retiro.id}>

                <td>{retiro.fecha}</td>

                <td>{retiro.cliente}</td>

                <td>{retiro.numeroDocumento}</td>

                <td>
                  {retiro.producto?.descripcion}
                </td>

                <td>

                <span
                    className={
                    retiro.estado === "Aprobado"
                        ? "estado-ok"
                        : "estado-error"
                    }
                >

                    {retiro.estado}

                </span>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );
}

export default TablaRetiros;