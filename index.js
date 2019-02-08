const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('it works');
});

app.listen(3000, () => console.log('connection on 3000'));
