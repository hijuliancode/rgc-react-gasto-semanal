import React, { useState } from 'react'

const Formulario = () => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)

  const agregarGasto = e => {
    e.preventDefault()

    // Validación
    // Construir el gasto
    // Pasar el gasto al componente principal
    // Resetear el form
  }
  return ( 
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus datos aquí</h2>
      <div className="campo">
        <label>Nombre gasto:</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto:</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 100"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
   );
}
 
export default Formulario;