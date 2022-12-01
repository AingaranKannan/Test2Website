$(document).ready(function (){
    $('#bton2').click(function(){
        alert('Hello');
    });
});

function fnc(){
alert('Submited');
}
$(document).ready(function(){
$(".InputField").focus(function(){
$(this).css("background-color","silver")
});
$(".InputField").blur(function(){
    $(this).css("background-color","white")
});
$(".InputField").change(function(){
    $(this).css("background-color","green")
});
});

$(document).ready(function(){
$(".InputField").dblclick(function(){
    $(this).css("background-color","yellow")
});
});