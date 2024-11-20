//nombre_artista, genero, pais
import mongoose, {Schema} from mongoose
const ArtistaSchema=new Schema({
    name: String,required: true,
    genre: String, required: true,
    country: String, required: true
});

export const artistaModel=new model('Artista',ArtistaSchema)

