import { useState } from "react";
import inventario from "../../data/inventario";

function StepProducto({ formulario, setFormulario }) {

  const [codigo, setCodigo] = useState("");
  const [resultado, setResultado] = useState(null);

  const buscarProducto = () => {

    const encontrado = inventario.find(
      item =>
        item.codigo.toLowerCase() === codigo.toLowerCase()
    );

    setResultado(encontrado || null);
  };

  return (
    <>
      <h2>Selección de Pedido</h2>

      <div className="form-group">

        <label>Código del Pedido</label>

        <input
          type="text"
          value={codigo}
          onChange={(e) =>
            setCodigo(e.target.value)
          }
        />

      </div>

      <button onClick={buscarProducto}>
        Buscar Pedido
      </button>

      {resultado && (
        <div className="producto-card">

          <h3>{resultado.codigo}</h3>

          <p>
            {resultado.descripcion}
          </p>

          <p>
            Estado: {resultado.estado}
          </p>

          <button
            onClick={() =>
              setFormulario({
                ...formulario,
                producto: resultado
              })
            }
          >
            Seleccionar
          </button>

        </div>
      )}

      {!resultado && codigo && (
        <div className="estado-documento error">
          Pedido no encontrado.
        </div>
      )}

      {formulario.producto && (
        <div className="estado-documento ok">
          Producto seleccionado:
          {" "}
          {formulario.producto.descripcion}
        </div>
      )}
    </>
  );
}

export default StepProducto;