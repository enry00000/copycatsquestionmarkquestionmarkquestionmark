
//Detect if document has scrolled
$(window).scroll(function (e) {
    var scrollAmount = 100;
    //Check if user has scrolled enough
    if ($(window).scrollTop() > scrollAmount) {
        //Add white class
        $("#header").addClass('header_white');
    } else if ($("#header").hasClass('header_white')) {
        //Remove white class
        $("#header").removeClass('header_white');
    }
});
