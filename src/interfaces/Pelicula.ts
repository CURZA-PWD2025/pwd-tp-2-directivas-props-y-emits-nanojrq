interface Pelicula {
    id: Number,
    titulo: String,
    anio: Number,
    genero: String,
    director: String,
    portada?: String,
    likes: Number
}

export default Pelicula;