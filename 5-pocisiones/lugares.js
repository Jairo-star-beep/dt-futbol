function edad(fechaNacString) {
    const fechaNac = new Date(fechaNacString);
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaNac;
    const edadMilisegundos = diferencia;
    const edadAnios = edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
    const edadFinal = Math.floor(edadAnios);
    return edadFinal;
}

function imprimirInformacionJugador(jugador) {
    const edadJugador = edad(jugador.fechaNac);
    console.log(`${jugador.nombre} "${jugador.apodo || 'sin apodo'}" ${jugador.apellido} (${edadJugador} años)`);
}

const jugadores = [
    {
        nombre: 'Nahitan',
        apellido: 'Nández',
        apodo: '',
        posicion: 'Mediocampista',
        fechaNacimiento: '28-12-1996'
    },
    {
        nombre: 'Federico',
        apellido: 'Valverde',
        apodo: 'Pajarito',
        posicion: 'Mediocampista',
        fechaNacimiento: '22-07-1998'
    },
    {
        nombre: 'Diego',
        apellido: 'Lugano',
        apodo: 'La tota',
        posicion: 'Defensa',
        fechaNacimiento: '02-11-1980'
    }
];

const mediocampistas = jugadores.filter(jugador => jugador.posicion === 'Mediocampista');
console.log(mediocampistas);
