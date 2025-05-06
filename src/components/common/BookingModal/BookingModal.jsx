import { useEffect, useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

export function BookingModal({ showModal, espacio, handleClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (showModal && espacio?.foto?.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % espacio.foto.length
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [showModal, espacio]);

  if (!espacio) return null;

  return (
    <Modal show={showModal} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{espacio.nombreEspacio}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={5}>
            <img
              src={
                espacio.foto?.length > 0
                  ? espacio.foto[currentImageIndex]
                  : "ruta/a/imagen_por_defecto.jpg"
              }
              alt={espacio.nombreEspacio}
              className="estandar-img"
            />
          </Col>
          <Col md={7}>
            <h5>Descripción</h5>
            <p>{espacio.descripcionCompleta}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => navigate("/dashboard", { state: { espacio } })}
        >
          Reservar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingModal;
