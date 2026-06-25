const API_URL = "http://127.0.0.1:8000/api";

export async function listarProductos() {
  const respuesta = await fetch(`${API_URL}/productos/`);

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el inventario");
  }

  return respuesta.json();
}

export async function listarRetiros() {
  const respuesta = await fetch(`${API_URL}/retiros/`);

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el historial de retiros");
  }

  return respuesta.json();
}

export async function crearRetiro(formulario) {
  const payload = {
    operador: formulario.operador,
    sucursal: formulario.sucursal,
    cliente: formulario.cliente,
    tipo_documento: formulario.tipoDocumento,
    numero_documento: formulario.numeroDocumento,
    fecha_vencimiento: formulario.fechaVencimiento,
    tipo_retiro: formulario.tipoRetiro,
    tercero: formulario.tercero,
    autorizacion: formulario.autorizacion,
    numero_autorizacion: formulario.numeroAutorizacion,
    observaciones: formulario.observaciones,
    producto: formulario.producto.id,
  };

  const respuesta = await fetch(`${API_URL}/retiros/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const datos = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(JSON.stringify(datos));
  }

  return datos;
}

// Convierte un retiro tal como lo devuelve la API (snake_case, producto como id)
// a la forma que ya usan los componentes del Dashboard (camelCase, producto como objeto).
export function adaptarRetiroDesdeApi(retiro, productos) {
  return {
    id: retiro.id,
    operador: retiro.operador,
    sucursal: retiro.sucursal,
    cliente: retiro.cliente,
    tipoDocumento: retiro.tipo_documento,
    numeroDocumento: retiro.numero_documento,
    fechaVencimiento: retiro.fecha_vencimiento,
    tipoRetiro: retiro.tipo_retiro,
    tercero: retiro.tercero,
    autorizacion: retiro.autorizacion,
    numeroAutorizacion: retiro.numero_autorizacion,
    observaciones: retiro.observaciones,
    producto: productos.find((p) => p.id === retiro.producto) || null,
    estado: retiro.estado,
    motivo: retiro.motivo,
    fecha: retiro.fecha,
  };
}
