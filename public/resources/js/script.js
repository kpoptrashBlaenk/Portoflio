$(document).ready(function () {


    // STICKY TITLES
    let $stickyElements = $('.sticky-title');
    let $stickyBorders = $('.sticky-border');

    for(let i = 0; i < $stickyElements.length; i++) {
        stickyElement($($stickyElements[i]), $($stickyBorders[i]));
    }

    $(window).on('scroll', function () {
        for(let i = 0; i < $stickyElements.length; i++) {
            stickyElement($($stickyElements[i]), $($stickyBorders[i]));
        }
    });

    function stickyElement (element, border) {
        if ($(window).scrollTop() >= element.offset().top - 5) {
            border.removeClass('border-bottom');
        } else {
            border.addClass('border-bottom');
        }
    }


    // RAINBOW
    $('.rainbow-line').each(function () {
            let line = $(this)
            setTimeout(function () {
                line.toggleClass('screen-left screen-right')
            }, Math.random() * 100)
        }
    )
    setTimeout(function () {
        $('.jumbotron-custom').removeClass('hidden-text')
    }, 900)

    setTimeout(function () {
        $('#rainbow').addClass('d-none')
    }, 3000)
});
