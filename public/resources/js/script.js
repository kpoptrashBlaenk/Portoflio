$(document).ready(function () {


    // STICKY TITLES
    let $stickyElement = $('.sticky-title');

    if ($(window).scrollTop() >= $stickyElement.offset().top - 5) {
        $stickyElement.removeClass('border-bottom');
    } else {
        $stickyElement.addClass('border-bottom');
    }

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $stickyElement.offset().top - 5) {
            $stickyElement.removeClass('border-bottom');
        } else {
            $stickyElement.addClass('border-bottom');
        }
    });


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