import {Routes, Route, Outlet} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {DashBoard} from "../pages/DashBoard/Dashboard"
import {Booking} from "../pages/Booking/Booking"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"
import { Error } from "../pages/Error/Error"
import { Menu } from "../common/Menu/Menu"
import { Galeria } from "../pages/Galeria/Galeria"


const RutasConMenu = () => {
    return (
      <>
        <Menu />
        <Outlet />
      </>
    );
  };
  
  export default RutasConMenu;
  
  export function Rutas() {
    return (
      <Routes>
        <Route path="/" element={<RutasConMenu />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/formulario" element={<FormularioReserva />} />
          <Route path="/galeria" element={<Galeria />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    );
  }
