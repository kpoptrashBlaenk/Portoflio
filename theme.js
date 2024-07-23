$(document).ready(function () {


    // LIGHT AND DARK MODE (theme)
    const savedTheme = localStorage.getItem('theme');
    const htmlTag = $('html');
    if (savedTheme) {
        htmlTag.attr('data-bs-theme', savedTheme);
    } else {
        htmlTag.attr('data-bs-theme', 'dark');
    }

    setButtonStyle();

    $('#toggle-theme').click(function () {
        if (htmlTag.attr('data-bs-theme') === 'dark') {
            htmlTag.attr('data-bs-theme', 'light');
        } else {
            htmlTag.attr('data-bs-theme', 'dark');
        }
        const currentTheme = htmlTag.attr('data-bs-theme');
        localStorage.setItem('theme', currentTheme);
        setButtonStyle();
    });

    function setButtonStyle() {
        if (htmlTag.attr('data-bs-theme') === 'dark') {
            $('#theme-icon').removeClass('fa-sun').addClass('fa-moon');
            $('#toggle-theme').removeClass('btn-outline-dark').addClass('btn-outline-light');
        } else {
            $('#theme-icon').removeClass('fa-moon').addClass('fa-sun');
            $('#toggle-theme').removeClass('btn-outline-white').addClass('btn-outline-dark');
        }
    }
});
