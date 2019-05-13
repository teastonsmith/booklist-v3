const express = require('express')
const controller = require('./controllers/controller')

const app = express()
app.use(express.json())

app.post('/api/APINAME', controller.create)
app.get('/api/APINAME', controller.read);
app.put('/api/APINAME/:id', controller.update);
app.delete('/api/APINAME/:id', controller.delete)