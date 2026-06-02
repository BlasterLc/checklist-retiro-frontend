function StepAutorizacion({ formulario, setFormulario }) {

  const esTercero = formulario.tipoRetiro === "tercero";

  return (
    <>
      <h2>Autorización de Retiro</h2>

      {!esTercero && (
        <div className="estado-documento ok">
          El titular retirará el pedido.
          No se requiere autorización adicional.
        </div>
      )}

      {esTercero && (
        <>
          <div className="form-group">

            <label>
              ¿Existe autorización del titular?
            </label>

            <select
              value={formulario.autorizacion ? "si" : "no"}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  autorizacion: e.target.value === "si"
                })
              }
            >
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>

          </div>

          <div className="form-group">

            <label>Número de autorización</label>

            <input
              type="text"
              value={formulario.numeroAutorizacion || ""}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  numeroAutorizacion: e.target.value
                })
              }
            />

          </div>

          <div className="form-group">

            <label>Observaciones</label>

            <textarea
              rows="4"
              value={formulario.observaciones || ""}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  observaciones: e.target.value
                })
              }
            />

          </div>

          {formulario.autorizacion ? (
            <div className="estado-documento ok">
              Autorización válida.
            </div>
          ) : (
            <div className="estado-documento error">
              Se requiere autorización para continuar.
            </div>
          )}
        </>
      )}
    </>
  );
}

export default StepAutorizacion;