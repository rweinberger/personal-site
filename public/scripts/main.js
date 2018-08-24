var fontColor = "#d6d6d6";
var highlight = "#dead51";
var duller = "#3e3e3e";

$( document ).ready(function() {
    setColorVars();
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

    $(title).css({'color': fontColor, 'border-right': "solid 40px " + duller, 'padding-right': "5px", "margin-right": "0"});
}

function setColorVars() {
    document.documentElement.style.setProperty('--highlight', highlight);
    document.documentElement.style.setProperty('--duller', duller);
    document.documentElement.style.setProperty('--font-color', fontColor);
}