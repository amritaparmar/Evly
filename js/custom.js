/*! 
 
 =========================================================
 
 *Evly Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */

$(document).ready(function () {

    //header-menutoggle js
    $('.menu a').on('click', function () {
        $('.hamburgermenu_toggle').toggle("medium");
    });

    //toggle menu when outside click js
    jQuery(document).on("click", function (event) {
        var $trigger = $(".menu a");
        if (($trigger !== event.target && !$trigger.has(event.target).length)) {
            jQuery(".hamburgermenu_toggle").slideUp("fast");
        }
    });

    //tab js
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    /* Extra class "tab_last" 
     to add border to right side
     of last tab */
    $('ul.tabs li').last().addClass("tab_last");


    //tab1 js
    $(".tab_content1").hide();
    $(".tab_content1:first").show();

    /* if in tab mode */
    $("ul.tabs1 li").click(function () {

        $(".tab_content1").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs1 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading1").removeClass("d_active");
        $(".tab_drawer_heading1[rel^='" + activeTab + "']").addClass("d_active1");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading1").click(function () {

        $(".tab_content1").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading1").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs1 li").removeClass("active");
        $("ul.tabs1 li[rel^='" + d_activeTab + "']").addClass("active");
    });
    /* Extra class "tab_last" 
     to add border to right side
     of last tab */
    $('ul.tabs1 li').last().addClass("tab_last");

    //faq onload bluebox
    setTimeout(function () {
        var myHeight = jQuery("a.accordion-title.active").parents(".accordian_details").height();
        jQuery("a.accordion-title.active").parents(".accordian_details").siblings(".blue_box").css("height", myHeight);

    }, 200);
    //faq accordian js
    $('.accordion').find('.accordian_details').on('click', function () {
        jQuery(".accordion-content").removeClass("show");
        jQuery(".accordion-content").slideUp("fast");
        $(".blue_box").removeAttr("style");

        // Adds Active Class
        $(this).toggleClass('active');
        jQuery(".blue_box.active").removeClass("active");
//        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Expand or Collapse This Panel
        jQuery(this).siblings(".blue_box").addClass("active");
        $(this).children(".accordion-content").slideToggle('fast');
        var current1 = jQuery(this);
        setTimeout(function () {
            var myHeight = current1.height();
            current1.siblings(".blue_box").css("height", myHeight);
        }, 200);
        // Hide The Other Panels
        // Removes Active Class From Other Titles
        $('.accordian_details').not($(this)).removeClass('active');
    });


    //colection filter 
    $(document).on('click', '.filter_menu a', function () {
        $('.collection_sidebar').animate({left: '0'});
        $('body').addClass('collection-filter');
    });
    $('.filter_colse,.filter-overlay').on("click", function () {
        var collection_sidebar = $('.collection_sidebar').outerWidth();
        $('.collection_sidebar').animate({left: -collection_sidebar});
        $('body').removeClass('collection-filter');
    });
    // Filter Toggle 
    $(document).on("click", ".category_close_icon", function (a) {
        $(this).parent('.category_list_title').siblings('.layer-filter').slideToggle();
        $(this).parent('.category_list_title').toggleClass('open-filter');
    });

    $(document).on("click", ".box_content_sidebar .side_filter_box_heading", function () {
        $(this).toggleClass("deactive");
        $(this).siblings("ul.side_filter_box_detail").slideToggle("fast");

    });

    //mCustomScrollbar
    if ($('.mCustomScrollbar').length > 0) {
        $('.mCustomScrollbar').mCustomScrollbar();
    }
    //Collection Sidebar  Height
    var s_title = $('.sidebar_title').outerHeight();
    var s_height = $(window).height();
    var s_total = s_height - s_title;
    $('.filter_content').css('height', s_total - 60);

    //Sidebar
    $('.sidebarCollapse').on('click', function () {
        $('body').toggleClass('compact-menu');
        $('.sidebar').toggleClass('active');
    });

    $('.mobilesearch').on('click', function () {
        $('.search-form').toggleClass('d-none');

    });

    // FAQ-floatingcta Accordion
    $('.faq1_section .faq_1_accordian').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(".faq_tags").removeClass("active");
        $(this).toggleClass('active');
        $(this).parents(".accordian_details").siblings(".faq_tags").addClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // FAQ-dealersigup Accordion
    $('.faq2-accordion .accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });


    // tab2 js
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    /* if in tab mode */
    $("ul.tabs2 li").click(function () {

        $(".tab_content2").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading2").removeClass("d_active");
        $(".tab_drawer_heading2[rel^='" + activeTab + "']").addClass("d_active");

        /*$(".tabs").css("margin-top", function(){ 
         return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
         });*/
    });
    $(".tab_container2").css("min-height", function () {
        return $(".tabs2").outerHeight() + 50;
    });
    /* if in drawer mode */
    $(".tab_drawer_heading2").click(function () {

        $(".tab_content2").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading2").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });

    //youtube video
    $(".play_blue").click(function () {
        $(".play_btn, .play_bg").hide();
        $(".yt")[0].src += "?autoplay=1";
        $(".yt").show();
    });

    //floating cta disable
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 1600)
//        {
//            $('.cta2_floating_box').fadeOut();
//        } else
//        {
//            $('.cta2_floating_box').fadeIn();
//        }
//    });

    //car-gallery-slider
    $('.car_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //car-detailbox-slider
    $('.car_box_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        slidesToScroll: 1
    });

    //car-hero-slider
    $('.car_banner_img').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Header Sticky
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.header').addClass("is-sticky");
        } else {
            $('.header').removeClass("is-sticky");
        }
    });

    //search-menutoggle js
    $('.search_icon').on('click', function () {
        $('.mobile_search_form').toggle("medium");
    });

    //Responsive menu
    jQuery(function ($) {
        $('.menu-btn').click(function () {
            $('.responsive-menu').toggleClass('expand');
        })
    })



});

//Progress-slider
$(document).ready(function () {
    var $slider = $('.dealer_slider_progress');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700
    });
});