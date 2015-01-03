$(document).ready(function() {
	$('.spectrum--loading .spectrum__colour__loader').animate({
		"height": "100%"},
		3000, function() {
			$('.spectrum__colour').addClass("spectrum__colour--loaded");
			$('.spectrum__colour__loader').animate({"opacity": "0"}, 1200);
	});
});