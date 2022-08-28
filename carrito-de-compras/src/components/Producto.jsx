import React, { Fragment } from 'react';

const Producto = ({articulo, articulos, carrito, agregarProducto}) => {

    // para no llamar todo el tiempo articulo.cosa, sino simplemente cosa
    const {id, nombre, precio}  = articulo;

    //funcion para agregar articulos al carrito
    const seleccionarProducto = (id) => {
        const articulo = articulos.filter(articulo => articulo.id === id)[0];
        agregarProducto([...carrito, articulo]);
        console.log(articulo)
    }

    return ( 

        <Fragment>
            <div>
                <p> </p>ID : {id} | Articulo : {nombre} | Precio : {precio} <p/>
                <button 
                    type='button'
                    onClick={ () => seleccionarProducto(id)}
                    >Comprar</button>
            </div>
        </Fragment>

     );
}
 
export default Producto;