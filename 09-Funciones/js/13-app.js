const reproductor = {
    cancion: '',
    reproducir:  id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    playlist: id => console.log(`Agregando canción ${id}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}


reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;

reproductor.reproducir(10);
reproductor.pausar();
reproductor.borrar(45);
reproductor.reproducirPlaylist('Dembow');