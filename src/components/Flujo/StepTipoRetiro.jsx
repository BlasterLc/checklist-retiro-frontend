function StepTipoRetiro({ formulario, setFormulario }) {
  return (
    <>
      <h2>Tipo de Retiro</h2>

      <div className="form-group">
        <label>¿Quién retira el pedido?</label>

        <select
          value={formulario.tipoRetiro}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              tipoRetiro: e.target.value
            })
          }
        >
          <option value="">Seleccione</option>
          <option value="titular">
            Titular de la compra
          </option>
          <option value="tercero">
            Tercero autorizado
          </option>
        </select>
      </div>

      {formulario.tipoRetiro === "tercero" && (
        <>
          <div className="form-group">
            <label>Nombre del tercero</label>

            <input
              type="text"
              value={formulario.tercero}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  tercero: e.target.value
                })
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default StepTipoRetiro;