import React, { Fragment, useState } from 'react'

const Pregunta = () => {
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    // función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(Number(e.target.value))
    }

    // Submit para definir el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault()

        // Validar
        if ( cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true)
            return;
        }

        // Si se pasa la validación
        guardarError(false)
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? 'Cantidad no valida' : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;