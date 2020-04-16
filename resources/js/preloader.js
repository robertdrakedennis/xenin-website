window.addEventListener( "pageshow", function ( event ) {
    let historyTraversal = event.persisted ||
        ( typeof window.performance !== "undefined" &&
            window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});

let loading_screen =  $('.loading-screen');
function removeLoader(){
    loading_screen.fadeOut(200,
        function() {
            loading_screen.hide();
        });
}



$(document).ready(function(){
    setTimeout(removeLoader, 100);
});

$('a:not(.dont-fade)').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    loading_screen.fadeIn(100,
        function() {
            loading_screen.show();
            newpage()
        });
});

function newpage() {
    window.location = newLocation;
}