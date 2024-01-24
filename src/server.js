const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexão com o  banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br'
]
//habilita cors
//app.use(cors()) --> aqui a api fica publica
app.use(cors({
    // origin:'http://127.0.0.1:5500'
    origin: function(origin, callback){
        let allowed = true

        //mobile app
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        //no lugar do null é uma mensagem
        callback(null, allowed)
    }
}))

//habilita server para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//executando o servidosr
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
console.log(`SERVER: http://localhost:8080/`)