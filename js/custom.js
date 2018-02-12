
$(document).ready(function () {
	$("#show-notification").click(function(){
			$(".notification-section").css("display", "block");
			$("body").css("background-color","rgba(0,0,0,0.5)");
		});
		$("#notification-close-btn").click(function(){
			$("body").css("background-color","rgba(255,255,255,0.5)");
			$(".notification-section").css("display", "none");
			
		});
		
	$("#booking-daycare-spot-calendar").responsiveCalendar({
		time: '2018-03',
		events: {
			"2018-03-13": {"number": 5, "url": "http://localhost/daycare-app/booking-spot-popup.html"},
			"2018-03-14": {"number": 1, "url": "http://w3widgets.com"}, 
			"2018-03-15":{"number": 1}, 
			"2018-03-16":{"number": 1},
			"2018-02-16":{"number": 1},
			"2018-06-17": {}}
		});
	$("#sell-daycare-spot-calendar").responsiveCalendar({
		time: '2018-03',
		events: {
			"2018-03-13": {"number": 5, "url": "http://localhost/daycare-app/sell-daycare-spot-popup.html"},
			"2018-03-14": {"number": 1, "url": "http://localhost/daycare-app/sell-daycare-spot-popup.html"}, 
			"2018-03-15":{"number": 1}, 
			"2018-03-16":{"number": 1},
			"2018-02-16":{"number": 1},
			"2018-06-17": {}}
		});
   $(".datetimepicker").datepicker();
});



function openNav() {
	document.getElementById("mySidenav").style.width = "230px";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}



$( document ).ready(function() {

});









