const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({message: 'Server is Up'});
});

app.get('/atualizou', (request, response) => {
    response.json({message: 'Atualizou mesmo'});
})

app.listen(3333);