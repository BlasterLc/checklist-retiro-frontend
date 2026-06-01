import { useState } from "react";

function NuevoRetiro() {

  const [paso] = useState(1);

  const [formulario, setFormulario] = useState({
    operador: "",
    sucursal: ""
  });

  return (
    <div className="retiro-container">

      <h2>Nuevo Retiro</h2>

      <div className="form-group">
        <label>Nombre del Operador</label>

        <input
          type="text"
          value={formulario.operador}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              operador: e.target.value
            })
          }
        />
      </div>

      <div className="form-group">
        <label>Sucursal</label>

        <input
          type="text"
          value={formulario.sucursal}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              sucursal: e.target.value
            })
          }
        />
      </div>

      <button>
        Siguiente
      </button>

    </div>
  );
}

export default NuevoRetiro;