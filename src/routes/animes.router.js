//mandamos llamar express, para crear al ruteador
const  express = require('express')
const router = express.Router()
const animeController = require('./../controllers/animes.controller')
//Routes :  creamos rutas
//obtenemos los animes para mostraros en pantalla
// router.get('/', )
router.get('/', animeController.getAnimes)
//scando query params, son parametros que le pasamos a través de la URL
router.put('/:id/update', animeController.putAnimes)


module.exports = router