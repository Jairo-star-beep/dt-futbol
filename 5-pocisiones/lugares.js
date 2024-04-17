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
        fechaNac: '1996-12-28'
    },
    {
        nombre: 'Federico',
        apellido: 'Valverde',
        apodo: 'Pajarito',
        fechaNac: '1998-07-22'
    }
];

jugadores.forEach(imprimirInformacionJugador);