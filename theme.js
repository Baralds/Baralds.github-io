$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
})
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

})
window.onscroll = function() {myFunction()};

var nav = document.getElementById('nav');
var sticky = nav.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky)
		{
    	nav.classList.add("sticky")
	} 
	else {
    	nav.classList.remove("sticky");
	}
}