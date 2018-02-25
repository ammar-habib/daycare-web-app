
$(document).ready(function () {
	$("#show-notification").click(function(){
		$(".notification-section").css("display", "block");
		$("body").css("background-color","rgba(0,0,0,0.5)");
		$(".bottom-navbar").css("box-shadow","none");
	});
	$("#notification-close-btn").click(function(){
		$("body").css("background-color","rgba(255,255,255,0.5)");
		$(".notification-section").css("display", "none");
		$(".bottom-navbar").css("box-shadow","0px -5px 5px 0px #ededed");

	});

	$("#booking-daycare-spot-calendar").responsiveCalendar({
		time: '2018-03',
		events: {
			"2018-03-13": {"number": 5},
			"2018-03-14": {"number": 1}, 
			"2018-03-15":{"number": 1}, 
			"2018-03-16":{"number": 1},
			"2018-02-16":{"number": 1},
			"2018-06-17": {}},
			onActiveDayClick: function(events) { $('#booking-spot-modal').modal('show'); 
			$('#booking-spot-modal-two').modal('show');
		}
		});
	$("#sell-daycare-spot-calendar").responsiveCalendar({
		time: '2018-03',
		events: {
			"2018-03-13": {"number": 5},
			"2018-03-14": {"number": 1}, 
			"2018-03-15":{"number": 1}, 
			"2018-03-16":{"number": 1},
			"2018-02-16":{"number": 1},
			"2018-06-17": {}},
			onActiveDayClick: function(events) { $('#selling-spot-modal').modal('show');
			$('#selling-spot-modal-two').modal('show');
		}
	});
	$(".datetimepicker").datepicker();
});

function openNav() {
	document.getElementById("mySidenav").style.width = "230px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}









