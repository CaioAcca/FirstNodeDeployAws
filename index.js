const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({message: 'Server is Up'});
});

app.listen(3333);