$(document).ready(function() {
    $('.control-panel').on("click", "button", function(event){
        var action = $(this).attr('data-action');
        var cat = $(this).closest('.play-area').find('.cat')[0];
        toggle_button_disable();
        if (action=="jump"){
            make_cat_jump(cat, toggle_button_disable);
        } else if (action=='fade') {
            make_cat_disappear(cat, toggle_button_disable);
        }
    });
});

var make_cat_jump = function(cat, callback) {
    if (arguments.length == 1) {
        callback = function() {};
    }
    $(cat).animate({'top': '-=100'}).delay(200).animate({'top': '+=100'}, callback);
};

var make_cat_disappear = function(cat, callback) {
    if (arguments.length == 1) {
        callback = function() {};
    }
    $(cat).animate({opacity: 0}, 400).delay(200).animate({opacity: 1}, 400, callback);
};

var toggle_button_disable = function() {
    var disable_status = $('.control-panel button').prop('disabled');
    $('.control-panel button').toggleClass('disabled').prop('disabled', !disable_status);
};
