function Stepper({ paso }) {

  const pasos = [
    "Operador",
    "Cliente",
    "Documento",
    "Tipo Retiro",
    "Autorización",
    "Producto",
    "Confirmación"
  ];

  return (
    <div className="stepper">

      {pasos.map((nombre, index) => (

        <div
          key={index}
          className={
            paso === index + 1
            ? "activo"
            : ""
          }
        >
          {index + 1}

          {nombre}
        </div>

      ))}

    </div>
  );
}

export default Stepper;