import React from 'react'
import PropTypes from "prop-types"

const Error = ({ mensaje = 'Se ha presentado un error' }) => (
    <div className="alert alert-danger error"> { mensaje } </div>
)
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;