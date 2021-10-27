const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde su respectiva pag')
})

app.get('*',(req, res) => {
    res.send('404 ~PAGE NOT FOUND PA')
})

app.listen(8333)