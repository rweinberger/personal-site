$( document ).ready(function() {
    $( '.project-toggle' ).on('click', function () {
        $($(this).siblings()[0]).toggle();
        // console.log($(this).siblings());
        // console.log(this.children());
    })
});