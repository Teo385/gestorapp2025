export async function getImages() {

    //1. para dodne voy (URI)
    const URL = "https://api.pexels.com/v1/search?query=antioquia&per_page=10"
    // 2. configuro la peticion (metodo, headers, body)
    const TOKEN = "dIDced4LvXI0SGhrBs2YoCPT8C8ZPOzOV9U4aTSBPipZTqOnqOe6gJSr"
    let peticion = {
        method: "GET",
        headers: {
            Authorization: TOKEN,
        },
    };
    // 3. hago la peticion (fetch)
    let respuesta = await fetch(URL, peticion);
    let fotos = await respuesta.json();
    return(fotos);
}