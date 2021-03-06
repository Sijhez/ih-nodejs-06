const express = require ('express')
const app = express()

require("dotenv").config()

const path = require('path')
//conexion a base de datos en el archivo indicado
const connectDB = require('./config/db')

const bodyParser = require('body-parser')

//middlewares
//Es una funcion que se ejecuta despues de recibir una peticion y antes de dar una respuesta
//trabajar con archivos estaticos
app.use(express.static(path.join(__dirname, 'public') ))
app.use(bodyParser.urlencoded({extended:true}))
//app.use(express.static(__dirname + '/public' ))

//CONFIGURACIONES
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','hbs')

connectDB()
//routes
app.get("/", (req, res)=>{
    res.render("index")
})
//animes
app.use('/animes', require('./routes/animes.router'))



//server
app.listen(process.env.PORT, ()=>{
    console.log( `Server on port ${process.env.PORT} `)
} )