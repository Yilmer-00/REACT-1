import React from 'react'
//aqui se ubicara la barra de navegacion

const NavBar = () => {
  return (
    <div>

    <header>
      <h1 class ="hi">
        hp inc.
      </h1>
      {/* menu de navegacion principal */}
      <div>
        <ul>
          <li><a href="inicio">Inicio</a></li>
          <li><a href="quienes-somos">Quienes Somos</a></li>
          <li><a href="contacto">Contacto</a></li>
        </ul>
      </div>

    </header>
    </div>
  )
}

export default NavBar
