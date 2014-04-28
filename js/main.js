

$(function() {

	/* JQUERY FOR SPAN FIX ON TITLE */
    
    $(".box h3")
        .wrapInner("<span>")
        


    $(".box h3 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

    /* JQUERY FOR TITLE ANIMATION */

    $(".box")
    	.mouseover(function(){
        	$(this).find("h3").show("slow")
        })
        .mouseout(function(){
        	$(this).find("h3").hide("slow")
        })
        
});



