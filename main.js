let html = document.querySelector(`html`);
let scrollPosition = window.scrollY;

document.addEventListener(`DOMContentLoaded`, function() {
    const fadeables = document.getElementsByClassName(`fadeable`)
    console.log(fadeables)

    for (let i = 0; i < fadeables.length; i++) {
        const element = fadeables[i]
        console.log(element)
        console.log(i)
    }
    /*fadeables.forEach(function(item) { wtf is an HTMLCollection rip arrays
        console.log(item)
    })*/
});

window.addEventListener(`scroll`, () => {
    scrollPosition = window.scrollY; 
    console.log(scrollPosition);
});

/*
{ // Event listener; triggers only once after the page loads
    
    window.scroll(function(){  // Event listener; triggers every time the window is scrolled 

        $('.fadeable').each(function(){ // Checks the location of each desired element with the 'fadeable' id
            
            let bottom_of_object = this.position().top + this.outerHeight();
            let bottom_of_window = window.scrollTop() + window.height();
            
            if(bottom_of_window > bottom_of_object) {
                this.animate({'opacity': '1'}, 5000);
            }
            
        }); 
    
    });
    
});
*/