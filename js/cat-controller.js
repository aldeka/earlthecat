CAT_APP = {
    init: function() {
        $('.control-panel').on("click", "button", function(event){
            var action = $(this).attr('data-action');
            var cat = $(this).closest('.play-area').find('.cat')[0];
            CAT_APP.toggle_button_disable();
            if (action=="jump"){
                CAT_APP.make_cat_jump(cat, CAT_APP.toggle_button_disable);
            } else if (action=='fade') {
                CAT_APP.make_cat_disappear(cat, CAT_APP.toggle_button_disable);
            }
        });
    },
    toggle_button_disable: function() {
        var disable_status = $('.control-panel button').prop('disabled');
        $('.control-panel button').toggleClass('disabled').prop('disabled', !disable_status);
    },
    make_cat_jump: function(cat, callback) {
        if (arguments.length == 1) {
            callback = function() {};
        }
        $(cat).animate({'top': '-=100'}).delay(200).animate({'top': '+=100'}, callback);
    },
    make_cat_disappear: function(cat, callback) {
        if (arguments.length == 1) {
            callback = function() {};
        }
        $(cat).animate({opacity: 0}, 400).delay(200).animate({opacity: 1}, 400, callback);
    }
};

$(document).ready(function() {
    CAT_APP.init();
});
