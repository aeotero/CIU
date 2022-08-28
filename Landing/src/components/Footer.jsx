import React from "react";

const Footer = ({fecha}) => {

    // aca va el codigo JS
    //const fecha = new Date().getFullYear()

    return (
        <div>
            <h3>
                Este es un footer - Año {fecha}
            </h3>
        </div>        
    );
}

export default Footer;