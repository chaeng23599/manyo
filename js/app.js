$(function () {
    // // load page
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

    $('.sc_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow')
    })

    $('.sc_bot').on('click', function () {
        $('html, body').animate({ scrollTop: 2800 }, 'slow')
    })

    $(window).scroll(function(){
        // $('.header .bounce').hide()
    })

    // slide
    $('.slide').slick({
        dots: false,
        nextArrow : $('.next'),
        prevArrow : $('.prev'),
        autoplay: true,
        autoplaySpeed: 5000,
    });

    
    
    $('.items ul').slick({
        dots: false,
        nextArrow : $('.next_item'),
        prevArrow : $('.prev_item'),
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            dots: true
        }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });


    var yi = $('.items ul li:first-child').hasClass('slick-active');

        if(yi = true) {
                $('.arrows_item span').addClass('fill')
            } else {
                $('.arrows_item span').removeClass('fill')
        }
    
    

    // $('.items ul').on("slick",function(){
    //     $('.arrows_item span').toggleClass('fill')
    // })


    $('.bars').on('click', function () {
        $('.nav').css('left','0px')
    });

    $('.nav .bars').on('click', function () {
        $('.nav').css('left','-500px')
    });



    $('.brand .b_slide ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
      });


})