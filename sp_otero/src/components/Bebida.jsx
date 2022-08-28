import React, { Fragment } from 'react';

const Bebida = ({bebida}) => {
    return (

        <Fragment>

            <p>{bebida.idDrink}</p>
            <p>{bebida.strDrink}</p>

        </Fragment>

      );
}
 
export default Bebida;