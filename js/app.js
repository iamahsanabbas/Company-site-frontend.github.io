$(document).ready(function(){

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        navText:['<','>'],
        responsive:{
            0:{
                
            },
            600:{
               
            },
            1000:{
                
            }
        }
    })


    $('#project-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2,
                center:true,
            }
        }
    })


    $('#review-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        dots:true,
        
        
    })

});