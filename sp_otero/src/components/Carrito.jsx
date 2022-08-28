import React, { Fragment } from 'react';
import '../carrito.css';
import Producto from './Producto';

const Carrito = ({carrito}) => {
    return ( 
        <Fragment>
            <div className='carrito'>
                <h3>Carrito de compras</h3>
                {
                    carrito.map(
                        articulo => (
                            <Producto
                                key={articulo.id}
                                articulo={articulo}
                            />
                        )
                    )
                }
            </div>
        </Fragment>
     );
}
 
export default Carrito;