export async function getImages(value = "tenis") {
    const URL = `https://api.pexels.com/v1/search?query=${value}&per_page=12`;
    const TOKEN = "dIDced4LvXI0SGhrBs2YoCPT8C8ZPOzOV9U4aTSBPipZTqOnqOe6gJSr";
    let peticion = {
        method: "GET",
        headers: {
            Authorization: TOKEN,
        },
    };
    let respuesta = await fetch(URL, peticion);
    let fotos = await respuesta.json();
    return(fotos);
}