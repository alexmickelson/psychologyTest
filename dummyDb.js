const Question = require('./question.js');

exports.getQuestions = function() {
    let question1 = new Question(1, 'what is your name', ['michael', 'not michael'], 'michael');
    let question2 = new Question(2, 'what is your name', ['michael', 'not michael'], 'michael');
    return [question1, question2];
}