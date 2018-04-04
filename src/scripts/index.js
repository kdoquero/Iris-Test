
import $ from "jquery";



$( ".asked-question" ).tooltip({
    position: {
        my: "right center",
        at: "left-10 center",
        collision: "flip",
        using: function( position, feedback ) {
            $( this ).addClass( feedback.vertical )
                .css( position );
        }
    },
    classes: {
        "ui-tooltip": "highlight"
      }

});
import '../scss/index.scss';

