import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Servicio from "./components/Servicio";

function App() {
  
  // creamos un state
  const [servicios, agregarServicios] = useState([
    {id:1, nombre:"primer servicio", valor:300},
    {id:2, nombre:"segundo servicio", valor:600},
    {id:3, nombre:"tercer servicio", valor:1000}    
  ]);

  return (
    <div>
      <h1>
        <Header/>
        Listado de trabajos
      </h1>
      {
        servicios.map(servicio =>
          (
            <Servicio
              servicio = {servicio}
            />
          )
        )
      }
      <servicio/>
      <Footer 
        fecha = {2022}
      />
    </div>
  );
}

export default App;
