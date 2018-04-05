
import $ from "jquery";
import '../scss/index.scss';

$(document).ready(function () {
    $( ".asked-question[title]" ).tooltip({
        position: {
            my: "right center",
            at: "left-40 center",
            collision: "flip",
            using: function( position, feedback ) {
                $( this ).addClass( feedback.vertical )
                    .css( position );
            }
        },
        tooltipClass: "QA"
    
    });
    
});






