window.onload = function () {

    //RAINBOW
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