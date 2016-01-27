// JavaScript Document
$(document).ready(function() {
	
	$("#goto-home").click(function() {
		$("html, body").animate({
			scrollTop: $("#home").offset().top
		}, 2000);
	});
	
	$("#goto-1").click(function() {
		$("html, body").animate({
			scrollTop: $("#1").offset().top -100
		}, 2000);
	});
	
	$("#goto-2").click(function() {
		$("html, body").animate({
			scrollTop: $("#2").offset().top -100
		}, 2000);
	});
	
	$("#goto-3").click(function() {
		$("html, body").animate({
			scrollTop: $("#3").offset().top -100
		}, 2000);
	});
	
	$("#goto-4").click(function() {
		$("html, body").animate({
			scrollTop: $("#4").offset().top -100
		}, 2000);
	});
	
	$("#goto-5").click(function() {
		$("html, body").animate({
			scrollTop: $("#5").offset().top -100
		}, 2000);
	});
	
	$("#goto-6").click(function() {
		$("html, body").animate({
			scrollTop: $("#6").offset().top -100
		}, 2000);
	});
});