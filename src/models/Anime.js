//importaciones
const mongoose =require('mongoose')
const Schema = mongoose.Schema

//SCHEMA
const animeSchema = new Schema({
  name: String,
  description:String,
  rating: String,
  episode: Number,
  categorie:String,
  studio: String,
  img: String  
},{timestamps: true})

//MODELO
const Anime = mongoose.model('Anime',animeSchema)

//EXPORTAR EL MODELO
module.exports = Anime