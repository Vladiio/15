

var LEFT = -96.5;
var TOP = -40;


function replace(obj) {
    var current = $(obj).offset();
    var pure = $('.invisible').offset();
    var top_diff = current.top - pure.top;
    var left_diff = current.left - pure.left;

    if (top_diff >= TOP && left_diff >= LEFT) {

        $(obj).offset({top: pure.top, left: pure.left});
        $('.invisible').offset({top: current.top, left: current.left});
    };
};


$(document).ready(function(){

    $('.square').click(function() {

        replace(this);

    });
});


