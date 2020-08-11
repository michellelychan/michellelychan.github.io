$(function(){
 	$("#portfolio-top-header").load("nav.html");
});

$(window).scroll(function(e) {
	if ($(this).scrollTop() > 1) {
		$("#portfolio-top-header").removeClass("static-nav").addClass("scroll-nav");
	}	else {
		$("#portfolio-top-header").removeClass("scroll-nav").addClass("static-nav");
	}							
});

$(".menu").click(function(e) {
	$("#menu-toggle").children().toggleClass("nav-open");
	e.preventDefault();
	$("#portfolio-top-header").delay(400).toggleClass("slide-down").delay(300).toggleClass("fixed-position");
	$(".photography-large-container").toggleClass("margin-top-0");
});

$(window).scroll(function(e) {
	if ($(this).scrollTop() > 1) {
		$("#portfolio-top-header").removeClass("static-nav").addClass("scroll-nav");
	}	else {
		$("#portfolio-top-header").removeClass("scroll-nav").addClass("static-nav");
	}						
});