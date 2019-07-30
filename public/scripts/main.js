$( document ).ready(function() {
    // setColorVars();
    selectActivePage();
});


function selectActivePage() {
    var path = window.location.pathname;
    var title;

    switch(path) {
        case '/':
            title = '#about-link';
            break;
        case '/projects':
            title = '#projects-link';
            break;
        case '/connect':
            title = '#connect-link';
            break;
        case '/resume':
            title='#resume-link';
            break;
    };

    // $(title).addClass("nav-a-active");
    $(title).css({'background-color': "var(--highlight)", 'color': "white"});
}

function setColorVars() {
    document.documentElement.style.setProperty('--highlight', highlight);
    document.documentElement.style.setProperty('--duller', duller);
    document.documentElement.style.setProperty('--font-color', fontColor);
}