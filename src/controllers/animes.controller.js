//aqui vamos a guardar las funciones que vana activarse cada que se pidan los datos de la base de datos
const Anime = require ('./../models/Anime')

const getAnimes = async(req, res)=>{
   const myAnimes = await Anime.find({})
   res.render('allAnimes', {myAnimes})
}

const putAnimes = async (req, res) =>{
    //deestructuracion de objetos
   const {id} = req.params
   //datos del formulario: serán enviados por el cliente, e interpretados por nosotros
   const {img} = req.body
   //encontramos un objeto por su ID y modificamos, es un metodo de Mongoose
 await Anime.findByIdAndUpdate(id, {img}, {new:true} )
   res.redirect('/animes')
}

module.exports = {getAnimes, putAnimes}