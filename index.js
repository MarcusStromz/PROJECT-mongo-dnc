const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json ({
        data: 'teste'
    })
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})