import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './components/Router/Rutas' 
import { ReservaProvider } from './components/common/FormularioReserva/Reserva'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReservaProvider>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </ReservaProvider>
  </StrictMode>
)

