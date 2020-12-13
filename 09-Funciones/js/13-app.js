const reproductor = {
    reproducir:  id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    playlist: id => console.log(`Agregando canción ${id}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`) 
}

reproductor.reproducir(10);