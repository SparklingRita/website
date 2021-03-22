var toggleStatus = 0;
function toggleMenu () {
    if (toggleStatus == 1) {
        document.getElementById("menu").style.left = "-240px";
        toggleStatus = 0;    
    }   else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0px";
        toggleStatus = 1; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.hero h1',
        translateX: [-500,0],
        duration: 2500,
        easing: 'easeOutExpo',
        delay: 100,
    });

    anime ({
        targets: '.hero p',
        translateY: [-50,0],
        duration: 2000,
        easing: 'easeOutExpo',
       opacity: [0,1]
    })
    
    anime ({
        targets: '.textAbout',
        translateX: [-200,0],
        duration: 2500,
        easing: 'easeOutExpo',
       opacity: [0,1]
    })
})


/*
NOT WORKING -> SAD
document.addEventListener('DOMContentLoaded', () => {
    //create waypoint
    let waypoint = new Waypoint ({
        element: document.querySelector('.textAbout'),
        handler: function() {
            anime({
                targets: '.textAbout',
                easing: 'easeOutExpo',
                translateX: [-100,0],
                opacity: [0,1],
                delay: 300,
            })
        },
        context: document.querySelectorAll('.aboutMe'),
    })
}) */
   
