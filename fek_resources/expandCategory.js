var expandCategory = function (par) {
    var $ = jQuery.noConflict();
    var h3Element = $(par).find("h3").toggleClass("active");   
    var hiddenElement = $(par).find("div.content.info-box");
    var elementH = $(hiddenElement).outerHeight() + 50;
    //	$(hiddenElement).toggleClass("active");

    if ($(h3Element).hasClass("active")) {
        $(par).animate({
            height: elementH
        }, 500, function () {
            // Animation complete.
        });
    } else {
        $(par).animate({
            height: 65
        }, 500, function () {
            // Animation complete.
        });
    }
};