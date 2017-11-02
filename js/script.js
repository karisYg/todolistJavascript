// var giveme = ()=>{
//   var username=prompt("What is your Name ");
//   if (username!="") {
//   	username="<strong> NONAME </strong>";
//   }
//   var salutations ="Hae, " + username + " welcome to Todolist App";
//   document.getElementById("name").innerHTML=salutations;


// }

// giveme();

$(document).ready(function(){
	var btnclick = $("#answer");
	var username = $("#userinput").val();
	var pwarning = $("#warning");
	$("#userinput").click(function(event) {
		pwarning.text("");
		$(this).css({
			borderColor : '#000',
			color: '#000'
		});

	});
	btnclick.click(function(event) {
		if (username!="") {

		}else{
			$("#userinput").css({
				borderColor: ' #ea4d4d',
				color: 'red'
			});
			pwarning.text("Hey, mehn ! add your Username! Here");
		}
	});

});