
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar: function() {
        console.log(`Pausando...`)
    },
    borrar: function(id) {
        console.log(`Borrando canción... ${id}`);
    },
    playlist: function (id) {
        console.log(`Agregando canción ${id}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
    
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(16);
reproductor.playlist(20);
reproductor.playlist("Rock");
reproductor.playlist("Rise up");

reproductor.reproducirPlaylist('Rise up');