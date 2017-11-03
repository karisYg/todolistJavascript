$(document).ready(function(){


	var inputusername = $("input#inputusername");
	var warning = $("p#warning");

	var btnalert = $("button#btnalert");

	var welcomeuser =$("#welcomeuser");

	inputusername.click(function() {
		warning.fadeOut('fast');
		$(this).val("");
		
	});

	var username =localStorage.getItem("username");


	//using local Storage
	// var  username = "omondi";
	// localStorage.setItem("username", username);

	//getting localStorage item
	//var cat = localStorage.getItem("myCat");

	//setting Local storage

	// localStorage.removeItem("username");



		if (username!=null) {
			
			$("div#afteranswer").fadeIn("slow", function() {
				welcomeuser.html(username);
				});


		}else{
			$("div#welcomeheader").removeClass('hidden');
			// $("div#welcomeheader").fadeIn('slow');

			btnalert.click(function() {
				var username = inputusername.val();
				if (username!="") {
					localStorage.setItem("username", username);
					location.reload();
				}
				
			});
			// 	btnalert.click(function() {
			// 	var username =inputusername.val();
			// 	if (username!="") {
			// 		localStorage.setItem("username", username);

			// 		$("div#afteranswer").show("fast", function() {
			// 			$("div#welcomeheader").hide();
			// 			welcomeuser.html("Welcome , <b>"+localStorage.getItem("username")+"</b>");
			// 		});
					
					

			// 	}else{
			// 		warning.fadeIn('fast', function() {
			// 			$(this).text("Buddy, add your username!");
			// 			inputusername.css('borderColor', '#18bc9c');
						
			// 		});

			// 	}

				
			// });
		}







});

