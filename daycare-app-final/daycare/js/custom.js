
$(document).ready(function () {
	var count=0;
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
	$("#open-spot-calendar").responsiveCalendar({
		time: '2018-03',
		events: {
			"2018-03-13": {"number": 5},
			"2018-03-14": {"number": 1}, 
			"2018-03-15":{"number": 1}, 
			"2018-03-16":{"number": 1},
			"2018-02-16":{"number": 1},
			"2018-06-17": {}},
			onActiveDayClick: function(events) { 
				console.log(count);
				$('.open-spots').append('<div class="row selected-sptos-list-row"><div class="col-xs-9 col-sm-9 padding-zero"><p>Thu, Nov 18/2017 - <span><a href="#" class="red-text-color">Remove</a></span></p><p><small>7:00AM - 9:00PM (Full Day)</small></p></div><div class="col-xs-3 col-sm-3 padding-zero vcenter"><form class="increase-decrease-form"><div class="value-button" id="decrease" count="'+count+'" onclick="decreaseValue(this)" value="Decrease Value"><i class="fa fa-chevron-left"></i></div><input type="number" id="number" count="'+count+'" value="0" /><div class="value-button" id="increase" count="'+count+'" onclick="increaseValue(this)" value="Increase Value"><i class="fa fa-chevron-right"></i></div></form></div></div>');
				count++;
			}
		});
	$(".datetimepicker").datepicker();
});

function openNav() {
	document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}









