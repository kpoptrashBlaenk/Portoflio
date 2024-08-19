$(document).ready(function () {


    // STICKY TITLES
    let $stickyElements = $('.sticky-title');
    let $stickyBorders = $('.sticky-border');

    for (let i = 0; i < $stickyElements.length; i++) {
        stickyElement($($stickyElements[i]), $($stickyBorders[i]));
    }

    $(window).on('scroll', function () {
        for (let i = 0; i < $stickyElements.length; i++) {
            stickyElement($($stickyElements[i]), $($stickyBorders[i]));
        }
    });

    function stickyElement(element, border) {
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


    // PROJECT CAROUSEL
    if (window.matchMedia("(min-width:576px)").matches) {
        let carouselInner = $('.carousel-inner');
        let carouselItem = $('.carousel-item');
        let cardWidth;
        setCardWidth();

        $(window).on('resize', setCardWidth);

        function setCardWidth() {
            cardWidth = carouselItem.outerWidth(true);
        }

        function moveFirstToLast() {
            let firstItem = carouselItem.first();
            firstItem.remove();
            carouselInner.append(firstItem);
            carouselInner.scrollLeft(carouselInner.scrollLeft() - cardWidth);
        }

        function moveLastToFirst() {
            let lastItem = carouselItem.last();
            lastItem.remove();
            carouselInner.prepend(lastItem);
            carouselInner.scrollLeft(carouselInner.scrollLeft() + cardWidth);
        }

        $('.carousel-control-next').on('click', function () {
            carouselInner.animate({scrollLeft: '+=' + cardWidth}, 600, function () {
                moveFirstToLast();
            });
        });

        $('.carousel-control-prev').on('click', function () {
            moveLastToFirst();
            carouselInner.animate({scrollLeft: '-=' + cardWidth}, 600);
        });
    }
});
