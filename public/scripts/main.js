var textColor = "#cecece";
var highlight = "#789ae0";
var dull = "#6578a0";

$( document ).ready(function() {
    selectActivePage();
});


function selectActivePage() {
    var path = window.location.pathname;
    console.log(path);
    var title;

    switch(path) {
      case '/':
        title = '#about-link'
        break;
      case '/projects':
        title = '#projects-link'
        break;
      case '/contact':
        title = '#contact-link'
        break;
    };

    $(title).css({'color': textColor, 'border-right': "solid 40px " + dull, 'padding-right': "5px", "margin-right": "0"});
}