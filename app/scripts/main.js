const myApp = myApp || {};

console.log('Hodd luck!');

$(window).load(function() {
// slider
    $('.slideshow .flexslider').flexslider({
        animation: "slide",
        directionNav: false
    });

    $('.carousel .flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        slideshow : false,
        itemWidth: 320,
        controlNav: false,
        move: 1,
        asNavFor: '.slider .flexslider'
    });
    $('.slider .flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        sync: ".carousel .flexslider"
    });

// tabs
    $(function() {

        $('.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });


// tables
    $(function() {
        $('.table-hover').on('click', 'td', function() {
            $(this).toggleClass('active').siblings().removeClass('active');
        });
    });


// accrodion
    function close_accordion_section() {
        jQuery('.accordion-section-title').removeClass('active');
        jQuery('.accordion-section-title-id').removeClass('active');
        jQuery('.accordion-section-content').slideUp(300).removeClass('open');
    }
    jQuery('.accordion-section-title').click(function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            jQuery(this).addClass('active');
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
        return false;
    });
    jQuery('.accordion-section-title-id').click(function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            jQuery(this).addClass('active');
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
    });

//fancybox
    $(".fancybox").fancybox({
        maxWidth	: 500,
        fitToView	: true,
        width		: 500
    });


// phone mask
    $(".validate-phone").mask("+7 (999) 999-9999");


// animate
    $(window).scroll(function() {
        $('#benefits').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("slideUp");
            }
        });
        $('#shares_anim').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+800) {
                $(this).addClass("fadeIn");
            }
        });
        $('#partners .container').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+700) {
                $(this).addClass("bigEntrance");
            }
        });
    });

// anchor
    $(".anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 70}, 1500);
    });

});

