// import React from 'react'
import "./App.css";
import Aside from "./componentes/Aside/Aside.jsx";
import Footer from "./componentes/footer/footer.jsx";
import NavBar from "./componentes/NavBar/NavBar.jsx";
import Seccion from "./componentes/Seccion/Seccion.jsx";
import SeccionDos from "./componentes/Secciondos/SeccionDos.jsx";




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
