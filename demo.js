//requires jquery
$('.check-options').on('click','.check-false',function(){
    $(this).removeClass('check-false').addClass('check-true');
    //enable
    $('input',this)[0].removeAttribute('disabled');
});
$('.check-options').on('click','.check-true',function(){
    $(this).removeClass('check-true').addClass('check-false');
    //disable
    $('input',this)[0].setAttribute('disabled','disabled');
});
