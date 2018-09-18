function left() {
	$(".tires").css("transform", "translate(-231px,0)");
}

function right() {
	$(".tires").css("transform", "translate(231px,0)");
}

$("#btn-l").click(function() {
	left();
});

$("#btn-r").click(function() {
	right();
});
	