const express = require('express');
const controller = require('./controllers/controller');

const PORT = 4000;
const app = express();
app.use(express.json());

app.post('/api/books', controller.create);
app.get('/api/books', controller.read);
app.put('/api/books/:id', controller.update);
app.delete('/api/books/:id', controller.delete);

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
