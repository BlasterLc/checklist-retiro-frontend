function StepOperador({
  formulario,
  setFormulario,
  avanzarPaso
}) {

  return (
    <>
      <h2>Datos del Operador</h2>

      <div className="form-group">

        <label>Nombre del Operador</label>

        <input
          id="operador"
          type="text"
          value={formulario.operador}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              operador: e.target.value
            })
          }
          onKeyDown={(e) => {

            if (e.key === "Enter") {

              document
                .getElementById("sucursal")
                .focus();

            }

          }}
        />

      </div>

      <div className="form-group">

        <label>Sucursal</label>

        <select
          id="sucursal"
          value={formulario.sucursal}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              sucursal: e.target.value
            })
          }
          onKeyDown={(e) => {

            if (e.key === "Enter") {

              avanzarPaso();

            }

          }}
        >
          <option value="">Seleccione</option>
          <option value="Sucursal A">Sucursal A</option>
          <option value="Sucursal B">Sucursal B</option>
          <option value="Sucursal C">Sucursal C</option>
        </select>

      </div>

    </>
  );
}

export default StepOperador;