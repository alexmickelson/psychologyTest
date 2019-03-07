const express = require('express');
const app = express();
var path = require('path');
const getQuestions = require('./dummyDb.js');
const answer = require('./answer.js');

app.use(express.static('./static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/data', (req, res) => {
    var quest = getQuestions.getQuestions();

    res.send(JSON.stringify(quest));
});

app.get('/data', (req, res) => {
    var quest = getQuestions.getQuestions();

    res.send(JSON.stringify(quest));
});

app.post('/answer', (req, res) => {
    //TODO: construct dummy data
    let a = new answer(1, 1, 'yes', 3);
    var j = JSON.stringify(a);
    console.log(JSON.parse(j));
    res.redirect('/');
});

app.listen(3000, () => console.log('connection on 3000'));
