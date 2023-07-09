// OPEN CLOSE MENU


$('#chek') .change(function(){

    if($(this).is(":checked")) {
        $('.nav-header').addClass('active');
    } else {
        $('.nav-header').removeClass('active');
    }


});

