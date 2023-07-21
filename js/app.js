$(function () {
    // // load page
    $('.header').load('../inc/header.html')
    // $('.footer').load('../inc/footer.html')

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

    $('.bars').on('click', function () {
        $('.nav').css('left','0px')
    });

    $('.nav .bars').on('click', function () {
        $('.nav').css('left','-500px')
    });

    $(document).ready(function(){
		$('.rolling ul li').marquee({
            speed: 80, // 속도
            gap: 100, // 간격
            delayBeforeStart: 0, // 시작 delay값
            direction: 'left', // 방향
            duplicated: true, // 선택 영역 복제
            pauseOnHover: true // hover시 일시중지 여부
        });
	});
})

$('.b_slide ul').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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