$(document).ready(function () {


    // LIGHT AND DARK MODE (theme)
    const savedTheme = localStorage.getItem('theme')
    const htmlTag = $('html')
    if (savedTheme) {
        htmlTag.attr('data-bs-theme', savedTheme)
    } else {
        htmlTag.attr('data-bs-theme', 'dark')
    }

    setButtonStyle()

    $('#toggle-theme').click(function () {
        if (htmlTag.attr('data-bs-theme') === 'dark') {
            htmlTag.attr('data-bs-theme', 'light')
        } else {
            htmlTag.attr('data-bs-theme', 'dark')
        }
        const currentTheme = htmlTag.attr('data-bs-theme')
        createCanvas(currentTheme)
        localStorage.setItem('theme', currentTheme)
        setButtonStyle()
    })

    function setButtonStyle() {
        if (htmlTag.attr('data-bs-theme') === 'dark') {
            $('#theme-icon').removeClass('fa-sun').addClass('fa-moon')
            $('#toggle-theme').removeClass('btn-outline-dark').addClass('btn-outline-light')
        } else {
            $('#theme-icon').removeClass('fa-moon').addClass('fa-sun')
            $('#toggle-theme').removeClass('btn-outline-white').addClass('btn-outline-dark')
        }
    }


    // PARTICLES
    function createCanvas (theme) {
        canvasSize()

        let particles, space

        let particleSpace = $('#particles-js')

        if(theme === "dark") {
            particles = "#ffffff"
            space = "#000000"
            particleSpace.removeClass('bg-white').addClass('bg-black')
        } else {
            particles = "#000000"
            space = "#ffffff"
            particleSpace.removeClass('bg-black').addClass('bg-white')
        }

        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 600
                    }
                },
                "color": {
                    "value": particles
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": space
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 0.5,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 10,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": particles,
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        })
    }

    createCanvas(savedTheme)

    function canvasSize() {
        $('#particles-js').css('height', $(document).height() + 'px', 'width', $(document).width() + 'px')
    }

    $(window).on('resize', canvasSize)
})