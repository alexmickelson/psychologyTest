$(function(){
    



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