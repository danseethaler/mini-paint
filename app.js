$(document).ready(function(){

    var color = white;
     var colors = 'white green red blue yellow';

    $('.box').on('click', function(){
        $(this).addClass(color);
    });

    $('.box').on('dblclick', function(){
        $(this).removeClass(color);
    });

    $('#reset').on('click', function(){
        $('.box').removeClass(colors);
    });

    $('#white').on('click', function(){
        color = "white";
    })

    $('#red').on('click', function(){
        color = "red";
    })

    $('#green').on('click', function(){
        color = "green";
    })

    $('#yellow').on('click', function(){
        color = "yellow";
    })

    $('#blue').on('click', function(){
        color = "blue";
    })

})
