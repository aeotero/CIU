import React from "react";

const Servicio = ({servicio}) => {
    return (
        
        <div>
            {servicio.id} | {servicio.nombre} | {servicio.valor}
        </div>

    );
}

export default Servicio;