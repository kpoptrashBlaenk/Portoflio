$(document).ready(function () {

    // FUNCTIONS
    async function getKey(key) {
        return new Promise((resolve) => {
            $.ajax({
                url: `getKey?key=${key}`,
                success: function (data) {
                    resolve(JSON.parse(data).content);
                }
            });
        });
    }


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


    // GITHUB PROJECTS
    const languageColors = [
        {language: "JavaScript", color: "#f1e05a", textColor: "#000000"}, // Black text
        {language: "Python", color: "#3572A5", textColor: "#FFFFFF"}, // White text
        {language: "Java", color: "#b07219", textColor: "#FFFFFF"}, // White text
        {language: "HTML", color: "#e34c26", textColor: "#FFFFFF"}, // White text
        {language: "CSS", color: "#563d7c", textColor: "#FFFFFF"}, // White text
        {language: "Ruby", color: "#701516", textColor: "#FFFFFF"}, // White text
        {language: "PHP", color: "#4F5D95", textColor: "#FFFFFF"}, // White text
        {language: "C++", color: "#f34b7d", textColor: "#FFFFFF"}, // White text
        {language: "C#", color: "#178600", textColor: "#FFFFFF"}, // White text
        {language: "TypeScript", color: "#3178c6", textColor: "#FFFFFF"}, // White text
        {language: "Shell", color: "#89e051", textColor: "#000000"}, // Black text
        {language: "Go", color: "#00ADD8", textColor: "#FFFFFF"}, // White text
        {language: "Swift", color: "#ffac45", textColor: "#000000"}, // Black text
        {language: "Kotlin", color: "#A97BFF", textColor: "#FFFFFF"}, // White text
        {language: "Rust", color: "#dea584", textColor: "#000000"}, // Black text
        {language: "Dart", color: "#00B4AB", textColor: "#FFFFFF"}, // White text
        {language: "Objective-C", color: "#438eff", textColor: "#FFFFFF"}, // White text
        {language: "R", color: "#198CE7", textColor: "#FFFFFF"}, // White text
        {language: "Scala", color: "#c22d40", textColor: "#FFFFFF"}, // White text
        {language: "Vim Script", color: "#199f4b", textColor: "#FFFFFF"}, // White text
        {language: "Lua", color: "#000080", textColor: "#FFFFFF"}, // White text
        {language: "Perl", color: "#0298c3", textColor: "#FFFFFF"}, // White text
        {language: "Haskell", color: "#5e5086", textColor: "#FFFFFF"}, // White text
        {language: "Elixir", color: "#6e4a7e", textColor: "#FFFFFF"}, // White text
        {language: "Clojure", color: "#db5855", textColor: "#FFFFFF"}, // White text
        {language: "Erlang", color: "#B83998", textColor: "#FFFFFF"}, // White text
        {language: "CoffeeScript", color: "#244776", textColor: "#FFFFFF"}, // White text
        {language: "Matlab", color: "#e16737", textColor: "#FFFFFF"}, // White text
        {language: "TeX", color: "#3D6117", textColor: "#FFFFFF"}, // White text
        {language: "Julia", color: "#a270ba", textColor: "#FFFFFF"}, // White text
        {language: "VHDL", color: "#adb2cb", textColor: "#000000"}, // Black text
        {language: "Verilog", color: "#b2b7f8", textColor: "#000000"}, // Black text
        {language: "Groovy", color: "#e69f56", textColor: "#000000"}, // Black text
        {language: "F#", color: "#b845fc", textColor: "#FFFFFF"}, // White text
        {language: "OCaml", color: "#3be133", textColor: "#000000"}, // Black text
        {language: "Assembly", color: "#6E4C13", textColor: "#FFFFFF"}, // White text
        {language: "Fortran", color: "#4d41b1", textColor: "#FFFFFF"} // White text
    ];

    function getLanguageColor(language) {
        const languageColor = languageColors.find(lc => lc.language.toLowerCase() === language.toLowerCase());
        return languageColor ? languageColor.color : '#000000';
    }

    function getLanguageTextColor(language) {
        const languageTextColor = languageColors.find(lc => lc.language.toLowerCase() === language.toLowerCase());
        return languageTextColor ? languageTextColor.textColor : '#FFFFFF';
    }

    async function fetchGitHubRepos() {
        let token = await getKey('github')

        const response = await fetch('https://api.github.com/users/kpoptrashBlaenk/repos', {
            headers: {
                Authorization: `token ${token}`
            }
        });
        const repos = await response.json();

        const repoCardsContainer = $('#carouselInner');

        $('#carouselLoading').remove()

        let firstCard = true;

        for (const repo of repos) {
            const commits = await fetch(`https://api.github.com/repos/kpoptrashBlaenk/${repo.name}/commits`, {
                headers: {
                    Authorization: token
                }
            });
            const commitsJSON = await commits.json();
            const commitCount = commitsJSON.length

            const carouselItem = $('<div>', {
                class: `carousel-item ${firstCard ? 'active' : ''}`
            }).appendTo(repoCardsContainer);

            const card = $('<div>', {
                class: 'card project-card shadow-lg',
                style: 'width: 18rem; height: 20rem;'
            }).appendTo(carouselItem);

            const link = $('<a>', {
                href: `${repo.html_url}`,
                target: '_blank',
                class: 'card-header text-center'
            }).appendTo(card);

            $('<h2>', {
                class: 'card-title'
            }).html(`${repo.name}`).appendTo(link);

            const cardBody = $('<div>', {
                class: 'card-body position-relative mb-3'
            }).appendTo(card);

            $('<p>', {
                class: 'card-text'
            }).text(`${repo.description}`).appendTo(cardBody);

            const infos = $('<div>', {
                class: 'position-absolute bottom-0'
            }).appendTo(cardBody);

            $('<span>', {
                class: 'badge',
                style: `background-color: ${getLanguageColor(repo.language)}; color: ${getLanguageTextColor(repo.language)}`
            }).text(repo.language).appendTo(infos);

            $('<div>', {}).html(`<strong>Commits:</strong> ${commitCount}`).appendTo(infos);

            $('<div>', {}).html(`<strong>Updated:</strong> ${dateFormat(repo.updated_at)}`).appendTo(infos);

            $('<div>', {}).html(`<strong>Created:</strong> ${dateFormat(repo.created_at)}`).appendTo(infos);

            firstCard = false;
        }
    }

    function dateFormat(value) {
        return value.substring(0, 10)
    }

    fetchGitHubRepos().then(function () {
        carouselInner = $('.carousel-inner');
        carouselItem = $('.carousel-item');

        setCardWidth();
    })


    // PROJECT CAROUSEL
    // NOTE: this NEEDS to run AFTER GITHUB PROJECTS
    let carouselInner;
    let carouselItem;
    let cardWidth;

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

    $('.next-button').on('click', function () {
        carouselItem = $('.carousel-item');
        carouselInner.animate({scrollLeft: '+=' + cardWidth}, 400, function () {
            moveFirstToLast();
        });
    });

    $('.prev-button').on('click', function () {
        carouselItem = $('.carousel-item');
        moveLastToFirst();
        carouselInner.animate({scrollLeft: '-=' + cardWidth}, 400);
    });


    // TIMELINE
    let timelineCollapses = $('.accordion-collapse');
    let timelineRange = $('#timelineRange');
    let timelineRangeLabel = $('#timelineRangeLabel');
    let timelineYear;
    let timelineRangeValue = localStorage.getItem('timelineValue');

    if(!timelineRangeValue) {
        timelineRangeValue = '0'
    }

    timelineRange.attr('value', timelineRangeValue)
    timeline(timelineRangeValue);

    timelineRange.on('input', function() {
        timeline(this.value);

        localStorage.setItem('timelineValue', this.value);
    })

    function timeline(value) {
        new bootstrap.Collapse(timelineCollapses[value], {
            toggle: true
        });

        switch(value) {
            case '0':
                timelineYear = '2001';
                break;
            case '1':
                timelineYear = '2007 - 2011';
                break;
            case '2':
                timelineYear = '2011 - 2020';
                break;
            case '3':
                timelineYear = '2021 - 2023';
                break;
            case '4':
                timelineYear = '2023 - Present';
                break;
            default:
                timelineYear = 'error';
                break;
        }

        timelineRangeLabel.text(timelineYear);
    }


});
