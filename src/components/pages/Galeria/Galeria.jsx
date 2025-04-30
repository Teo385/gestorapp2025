import { useEffect, useState } from "react";
import { getImages } from "../../../services/serviciosGaleria";

export function Galeria() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getImages()
        .then(data => {
            setImages(data)
            setLoading(true);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <>
                <div>
                    <h1>Galería</h1>
                    <p>Esta es la página de la galería.</p>
                    <hr />
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {images.photos.map((image, index) => {
                                return(
                                    <div key={index} className="col">
                                        <div className="card h-100 shadow p-5">
                                            <img src={image.src.landscape} alt="" />
                                            <p>{image.alt}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return(
            <>
                <h1>Estamos Cargando..</h1>
            </>
        )
    }
}
