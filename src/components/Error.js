import React from 'react'

const Error = ({ mensaje = 'Se ha presentado un error' }) => (
    <div className="alert alert-danger error"> { mensaje } </div>
)
 
export default Error;