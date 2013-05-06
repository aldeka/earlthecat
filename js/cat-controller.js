EVENTBRITE = {
    init: function() {
        $('.control-panel').on("click", "button", function(event){
            var action = $(this).attr('data-action');
            var cat = $(this).closest('.play-area').find('.cat')[0];
            EVENTBRITE.toggleButtonDisable();
            if (action=="jump"){
                EVENTBRITE.makeCatJump(cat, EVENTBRITE.toggleButtonDisable);
            } else if (action=='fade') {
                EVENTBRITE.makeCatDisappear(cat, EVENTBRITE.toggleButtonDisable);
            }
        });
    },
    toggleButtonDisable: function() {
        var disableStatus = $('.control-panel button').prop('disabled');
        $('.control-panel button').toggleClass('disabled').prop('disabled', !disableStatus);
    },
    makeCatJump: function(cat, callback) {
        if (arguments.length == 1) {
            callback = function() {};
        }
        $(cat).animate({'top': '-=100'}).delay(200).animate({'top': '+=100'}, callback);
    },
    makeCatDisappear: function(cat, callback) {
        if (arguments.length == 1) {
            callback = function() {};
        }
        $(cat).animate({opacity: 0}, 400).delay(200).animate({opacity: 1}, 400, callback);
    }
};

$(document).ready(function() {
    EVENTBRITE.init();
});
