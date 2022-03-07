$(document).ready(function() {
    
    $(window).scroll( function(){  // Listen to every time the window is scrolled 

        $('.fadeable').each( function(){ // Checks the location of each desired element with the 'fadeable' id
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).animate({'opacity':'1'}, 1500);
            }
            
        }); 
    
    });
    
});