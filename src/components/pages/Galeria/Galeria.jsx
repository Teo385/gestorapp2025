import { useState } from "react";
import { getImages } from "../../../services/serviciosGaleria";
import { datosAPI } from "../DashBoard/DatosJSON"; // Este es el JSON local con la info de los espacios
import { BookingModal } from "../../common/BookingModal/BookingModal";
import "./Galeria.css";

// Componente tarjeta para mostrar cada imagen
function TarjetaImagen({ foto, onImageClick }) {
  return (
    <div className="col">
      <div
        className="card h-100 shadow border-0 bg-white text-dark"
        onClick={() => onImageClick(foto)}
      >
        <img
          src={foto.src.landscape}
          alt={foto.alt || "Imagen sin descripción"}
          className="card-img-top"
          style={{
            objectFit: "cover",
            borderRadius: "10px",
            height: "200px",
          }}
        />
        <div className="card-body">
          <p className="card-text">{foto.alt || "Imagen sin descripción"}</p>
        </div>
      </div>
    </div>
  );
}

export default TarjetaImagen;

export function Galeria() {
  const [busqueda, setBusqueda] = useState("");
  const [datosGaleria, setDatosGaleria] = useState({ photos: [] }); // Renombrado para evitar conflicto
  const [cargando, setCargando] = useState(false);
  const [buscarRealizado, setBuscarRealizado] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const manejarBusqueda = (evento) => {
    evento.preventDefault();

    const termino = busqueda.trim();
    if (termino === "") {
      setDatosGaleria({ photos: [] });
      setBuscarRealizado(false);
      return;
    }

    setCargando(true);
    getImages(termino)
      .then((datos) => {
        setDatosGaleria(datos); // Guardamos los datos de la API
        setBuscarRealizado(true);
      })
      .catch((error) => {
        console.error("Error al consultar imágenes:", error);
        setDatosGaleria({ photos: [] });
        setBuscarRealizado(true);
      })
      .finally(() => {
        setCargando(false);
      });
  };

  const normalizarTexto = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const handleImageClick = (foto) => {
    const nombre = normalizarTexto(foto.alt || "");

    if (Array.isArray(datosAPI)) {
      const espacioEncontrado = datosAPI.find((espacio) =>
        normalizarTexto(espacio.nombreEspacio).includes(nombre)
      );

      if (espacioEncontrado) {
        setSelectedSpace(espacioEncontrado);
        setShowModal(true);
      } else {
        console.warn("❌ Espacio no encontrado para:", nombre);
      }
    } else {
      console.error("❌ datosAPI no es un arreglo válido.");
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: "100px",
        color: "#212529",
      }}
    >
      <div className="container text-center">
        <h1
          className="mb-4 fw-bold display-1 d-inline-block pb-2"
          style={{ color: "#8ecae6", borderBottom: "4px solid #8ecae6" }}
        >
          Galería
        </h1>

        <form
          className="d-flex justify-content-center mb-5"
          onSubmit={manejarBusqueda}
        >
          <input
            type="text"
            className="form-control w-50 me-2"
            placeholder="Buscar imágenes (ej: Sauna, Cancha de tenis, piscina...)"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              borderRadius: "8px",
              borderColor: "#8ecae6",
              backgroundColor: "#ffffff",
              color: "#212529",
            }}
          />
          <button
            className="fw-bold px-4"
            type="submit"
            style={{
              backgroundColor: "#8ecae6",
              border: "none",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            Buscar
          </button>
        </form>

        {cargando && (
          <div className="text-center my-4">
            <div
              className="spinner-border"
              style={{ color: "#8ecae6" }}
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2 text-secondary">Cargando imágenes...</p>
          </div>
        )}

        {buscarRealizado && !cargando && datosGaleria.photos.length === 0 && (
          <p className="text-danger fw-bold mt-3">
            ❌ No se encontraron resultados para “{busqueda}”.
          </p>
        )}

        {datosGaleria.photos.length > 0 && (
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {datosGaleria.photos.map((foto) => (
              <TarjetaImagen
                key={foto.id}
                foto={foto}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedSpace && (
        <BookingModal
          showModal={showModal}
          espacio={selectedSpace}
          handleClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
