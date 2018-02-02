
$(document).ready(function () {

	$(".responsive-calendar").responsiveCalendar({
		time: '2018-03',
		events: {
			"2018-03-13": {"number": 5, "url": "http://localhost/daycare-app/booking-spot-popup.html"},
			"2018-03-14": {"number": 1, "url": "http://w3widgets.com"}, 
			"2018-03-15":{"number": 1}, 
			"2018-03-16":{"number": 1},
			"2018-02-16":{"number": 1},
			"2018-06-17": {}}
		});
	
});

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}













