$(function(){
    class Question {
        constructor(id, inquery, answers, correct){
            this.id = id;
            this.inquery = inquery;
            this.answers = answers;
            this.correct = correct;
        }
    }
    
    var questions;
    $.get('/data', function(data, status){
        questions = $.parseJSON(data);
    });
    //questions are populated by now

    var start = $.now()
    
    $(document).on('keypress',function(e) {
        if(e.which == 97) { //a
            alert($.now()-start);
        }
        if(e.which == 100) { //d
            alert($.now()-start);
        }
    });
    //debugger;
});
