import { useEffect, useState } from "react";
import { calendario } from "./datosCalendario";
import { useNavigate, useLocation } from "react-router-dom";
import { useReservas } from "../FormularioReserva/Reserva";
import "./Calendario.css";

export function Calendario() {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const location = useLocation();
  const espacio = location.state?.espacio;
  const navegador = useNavigate();

  useEffect(() => {
    if (!espacio) {
      navegador("/booking");
    }
  }, [espacio, navegador]);

  const { reservas } = useReservas();

  useEffect(() => {
    setDias(calendario[0]);
    setHoras(calendario[1]);
  }, []);

  //funcion que capture los dos valores (hora y fecha)
  function crearReserva(dia, hora, espacio) {
    console.log("CREANDO RESERVA CON:", { dia, hora, espacio });
    navegador("/formulario", {
      state: { dia, hora, espacio },
    });
  }

  function estaOcupado(dia, hora) {
    const reservasTotales = [...(espacio?.calendario || []), ...reservas];
    return reservasTotales.some(
      (reserva) =>
        reserva.dia.toLowerCase() === dia.toLowerCase() && reserva.hora === hora
    );
  }

  return (
    <>
        <div className="calendar-container rounded shadow p-3">
            <table className="table body">
            <thead>
                <tr>
                <th>Hora</th>
                {dias.map((dia) => {
                    return <th key={dia}>{dia}</th>;
                })}
                </tr>
            </thead>
            <tbody>
                {horas.map((hora) => {
                return (
                    <tr key={hora}>
                    <td>{hora}</td>
                    {dias.map((dia) => {
                        return (
                        <td key={dia}>
                            <button
                            className={`btn btn-reserva ${
                                estaOcupado(dia, hora)
                                ? "btn-danger"
                                : "btn-success"
                            }`}
                            onClick={() => crearReserva(dia, hora, espacio)}
                            disabled={estaOcupado(dia, hora)}
                            >
                            {estaOcupado(dia, hora) ? "Ocupado" : "Reservar"}
                            </button>
                        </td>
                        );
                    })}
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
    </>
  );
}
