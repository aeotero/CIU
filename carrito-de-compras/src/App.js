import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import Bebida from './components/Bebida';


function App() {

  // creamos un State para las bebidas
  const [bebida, setBebida] = useState({});

  //hook para la lista de articulos
  const [articulos, guardarArticulos] = useState([
    {id:0, nombre:"Purina cat chow", precio:1000},
    {id:1, nombre:"Arena ", precio:800},
    {id:2, nombre:"Wiskas", precio:500},
    {id:3, nombre:"golosinas", precio:200}
  ])

  //Hook para la lista del carrito (articulos comprados)
  const [carrito, agregarProducto] = useState([]);

  //Funcion para consultar la api y traer informacion
  const consultarAPI = async() => {
    try {
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const bebida = await api.json();
      setBebida(bebida.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Header
        titulo = "carrito de compras - pet chop milanga"
      />
      <div>
        Lista de productos
      </div>
      {

        articulos.map(
          articulo => 
          (
            <Producto
              articulo={articulo}
              key={articulo.id}
              articulos={articulos}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
          )
        )
      }

      <Carrito 
        carrito={carrito}
      />

      <br/>

      <div
       style={
        {
          display: "flex",
          background: "lightGrey"
        }
      }>
        <button
          type='button'
          onClick={consultarAPI}
        > Traer bebida</button>
        <br/>

        <Bebida
          bebida={bebida}
        />

      </div>

      <Footer/>
    </Fragment>
  );
}

export default App;