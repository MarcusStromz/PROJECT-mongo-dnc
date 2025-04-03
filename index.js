const express = require('express')
const app = express()
const familiaModel = require("./src/model/user")

app.use(express.json()) 

app.post('/familias', async (req, res) => {
    const response = await familiaModel.create({
        nome: 'Marcus',
        idade: 22,
    })
    return res.status(200).json({
        data: response
    })
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})