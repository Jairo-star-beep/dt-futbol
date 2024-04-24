async function usuarios() {
    await Fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios");
}

async function Fetch(url) {
    fetch(url)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch((error) => ("Error:", error));
}

usuarios();

async function reportes() {
    await Fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/reportes");
}

async function Fetch(url) {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error")
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
        return null
    }
}

reportes();