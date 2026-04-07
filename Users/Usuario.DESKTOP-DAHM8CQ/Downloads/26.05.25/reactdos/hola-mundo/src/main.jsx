import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './componentes/NavBar/NavBar.jsx'
import Seccion from './componentes/Seccion/Seccion.jsx'
import Aside from './componentes/Aside/Aside.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NavBar />
    <Seccion />
    <Aside  />
  </StrictMode>,
)
