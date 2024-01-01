/*

    master.js: No description
    Last Updated 03/07/22 @ 2:32PM PST

    L.Ruiz - LE|RZ

*/

let currentScrollY = window.scrollY;

document.addEventListener(`DOMContentLoaded`, function() {
    const fadeableElements = document.getElementsByClassName(`fadeable`)
    console.log(fadeableElements)

    /*
    for (let i = 0; i < fadeableElements.length; i++) {
        const element = fadeableElements[i]
        const randomR = Math.random()*255
        const randomG = Math.random()*255
        const randomB = Math.random()*255
        
        element.style["background-color"] = `rgb(${randomR}, ${randomG}, ${randomB})`
        element.style.color = `rgb(${255-randomR}, ${255-randomG}, ${255-randomB})`
    }
    */

    function updateFadeables() {
        currentScrollY = window.scrollY
        //console.log(currentScrollY)
        
        for (let i = 0; i < fadeableElements.length; i++) {
            const element = fadeableElements[i]
            const boundingBox = element.getBoundingClientRect()
            const fadeInPoint = window.innerHeight - boundingBox.height/2

            if (boundingBox.top < fadeInPoint) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        }
    }

    window.addEventListener(`scroll`, updateFadeables)
    updateFadeables()
});

console.clear();

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