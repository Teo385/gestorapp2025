import { useState } from 'react';
import { Row, Col, Card, Button, Modal} from "react-bootstrap";
import { datosAPI } from "../DashBoard/DatosJSON";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./Booking.css";


export function Booking() {
    const [showModal, setShowModal] = useState(false);
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navegador = useNavigate()

    const handleOpenModal = (espacio) => {
        setSelectedSpace(espacio);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSpace(null);

    };

    useEffect(() => {
        let interval;
        if (showModal && selectedSpace?.foto?.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % selectedSpace.foto.length
                );
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [showModal, selectedSpace]);


    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Reserva de Espacios</h1>

            <p className="text-center mb-5">
                Aquí puedes seleccionar cada uno de los espacios y agendar tu reserva según disponibilidad.
            </p>

            <Row xs={1} md={2} lg={3} className="g-4">
                {datosAPI.map((espacio) => (
                    <Col key={espacio.id}>
                        <Card className="h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src={espacio.foto !== "NAN" ? espacio.foto : "ruta/a/imagen_por_defecto.jpg"}
                            alt={espacio.nombreEspacio}
                            className="estandar-img"
                            />
                            <Card.Body>
                                <Card.Title>{espacio.nombreEspacio}</Card.Title>
                                <Card.Text>{espacio.descripcion}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Button
                                    variant="primary"
                                    className="w-100"
                                    onClick={() => handleOpenModal(espacio)}
                                >
                                    Agendar
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                {selectedSpace && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedSpace.nombreEspacio}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col md={5}>
                                <img
                                    src={
                                        selectedSpace.foto?.length > 0
                                            ? selectedSpace.foto[currentImageIndex]
                                            : "ruta/a/imagen_por_defecto.jpg"
                                    }
                                    alt={selectedSpace.nombreEspacio}
                                    className="estandar-img"
                                />
                                </Col>
                                <Col md={7}>
                                    <h5>Descripción</h5>
                                    <p>{selectedSpace.descripcionCompleta}</p>                                   
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancelar
                            </Button>
                            <Button
                            variant="primary"
                            onClick={() => navegador("/dashboard", { state: { espacio: selectedSpace } })}
                        >
                            Reservar
                        </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    );
}
