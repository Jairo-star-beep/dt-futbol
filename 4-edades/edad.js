function edad(fechaNacString) {
  const fechaNac = new Date(fechaNacString);
  const fechaActual = new Date();
  const diferencia = fechaActual - fechaNac;
  const edadMilisegundos = diferencia;
  const edadAnios = edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
  const edadFinal = Math.floor(edadAnios);
  return edadFinal;
}

let jugador = {
  nombre: 'Luciano',
  apellido: 'Rodriguez',
  apodo: 'Lucho',
  fechaNacimiento: '2003-07-16'
};

const edadJugador = edad(jugador.fechaNacimiento);

console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido} (${edadJugador} años)`);