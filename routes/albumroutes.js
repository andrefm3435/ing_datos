//una por método, insertar, consultar por año, editar año, eliminar
import Router from express;
import {insertarAlbum} from "./controller/albumController"
import {albumporaño} from "./controller/albumController"
import {editarAño} from "./controller/albumController"
import {eliminarAlbum} from "./controller/albumController"
const router=Router();
router.post('/album',album(insertarAlbum))
router.get('/album',album(albumporaño))
router.put('/album',album(editarAño))
router.delete('/album',album(eliminarAlbum))

export default router