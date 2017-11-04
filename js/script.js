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

	//resetting the localstorage

	$("a#reset").click(function(event) {
		/* Act on the event */

		localStorage.removeItem("username");
		location.reload();
		event.preventDefault();
	});

	



		if (username!=null) {
			
			$("div#afteranswer").fadeIn("slow", function() {
				welcomeuser.html(username);
				});
			$("a#reset").text("Reset");

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
		}

	var addtodobtn =$("#addtodobtn");
	var newtodoinput =$("input#newtodo");
	

	newtodoinput.click(function() {
		$(this).val("");
		$("#todowarning").text("");
	});

	
	addtodobtn.click(function() {
		brains();
	});

	// listening for keypress event...the enter key

	document.onkeypress=function(e){
		e=e||window.event;

		var charCode =(typeof e.which ==13)?e.which:e.keyCode;
		if (charCode) {
			brains();
		}
	}



	var todoArray =[];
	function brains() {
		var todo=newtodoinput.val();
		if (todo!="") {
			todoArray.push(todo);
			alert(todoArray);
			
		}else{
			$("#todowarning").text(" Required Here!");
			$("input#newtodo").css('borderColor', '#d00e0e');
		}
	}







});

