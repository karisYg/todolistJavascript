$(document).ready(function(){
	var inputusername = $("input#inputusername");
	var warning = $("p#warning");

	var btnalert = $("button#btnalert");

	var welcomeuser =$("#welcomeuser");

	inputusername.click(function() {
		warning.fadeOut('fast');
		$(this).val("");
		
	});


	btnalert.click(function() {
		var username =inputusername.val();
		if (username!="") {
			$("div#afteranswer").show("fast", function() {
				$("div#welcomeheader").hide();
				welcomeuser.html("Welcome , <b>"+username+"</b>");
			});
			
			

		}else{
			warning.fadeIn('fast', function() {
				$(this).text("Buddy, add your username!");
				inputusername.css('borderColor', '#18bc9c');
				
			});

		}

		
	});





});

