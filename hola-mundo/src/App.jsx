// import React from 'react'
import "./App.css";

//importamos los componentes que se van a utilizar en el sitio web
import Aside from "./componentes/Aside/Aside.jsx";
import Footer from "./componentes/footer/footer.jsx";
import NavBar from "./componentes/NavBar/NavBar.jsx";
import Seccion from "./componentes/Seccion/Seccion.jsx";
import SeccionDos from "./componentes/Secciondos/SeccionDos.jsx";


//componente principal del sitio web
//se define la estructura del sitio web utilizando los componentes importados

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="main">
        <main className="area">
          <Seccion />
          <SeccionDos />
        </main>
        <Aside />
      </div >
      <Footer />
    </div>
  )


}


export default App
