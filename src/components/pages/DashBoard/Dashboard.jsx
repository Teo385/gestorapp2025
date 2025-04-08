import { Calendario } from "../../common/Calendario/Calendario";
import { useLocation } from "react-router-dom";

export const DashBoard = () => {
  const location = useLocation();
  const espacioSeleccionado = location.state?.espacio;

  return (
    <>
      <br />
      <br />
      {espacioSeleccionado && (
        <h2 className="text-center text-muted mb-3">
          Estás reservando: {espacioSeleccionado.nombreEspacio}
        </h2>
      )}
      <div className="container my-5">
        <Calendario />
      </div>
    </>
  );
};
