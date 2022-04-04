$(document).ready(() =>{

    $('.bars').click(function(){
        $('.navlist').slideToggle();
    });

    // navbar background change scroll
    $(window).scroll(() => {
        let position = $(this).scrollTop();
        if (position > 90){
            $(".nav").addClass("bg-navbar");
        }
        else {
            $('.nav').removeClass('bg-navbar')
        }
    });

    // slick slider

    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    
});

    // const toggleButton = document.getElementsByClassName('bars');
    // const navitems = document.getElementsByTagName('ul');

    // toggleButton.addEventListener('click', () => {
    //     navitems.toggleButton('active')
    // });
