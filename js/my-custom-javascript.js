$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
    // let contents = $('#firstone').html();
    // alert(contents);
    // $('.codeup').css('border', '1px solid red');
    // $('li').css('font-size', '20px');
    // let contents = $('h1').html();
    // alert(contents);
    // $('h1, p, li').css('background-color', '#FF0');
    $('h1').click(function() {
        $(this).css('background-color','purple' );});

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    })
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

});