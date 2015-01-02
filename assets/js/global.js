$(document).ready(function() {
	$('.spectrum--loading .spectrum__colour__loader').animate({
		"height": "100%"},
		3000, function() {
			$('.spectrum__colour__image').animate({"opacity": "1.0"}, 1200);
	});
});