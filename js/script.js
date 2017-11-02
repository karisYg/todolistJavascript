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
	//var userinput = $("input#userinput").val();
	//var userinput = document.getElementById("userinput").value;
	var pwarning = $("#warning");
	var welcomeheader =$("#welcomeheader");
	$("#userinput").click(function() {
		pwarning.text("");
		$(this).css({
			borderColor : '#000',
			color: '#000'
		});

	});
	btnclick.click(function() {
		console.log(userinput);
		// if (userinput) {
		// 	// welcomeheader.css('display', 'none');
		// 	alert("message?: DOMString");

		// }else{
		// 	$("#userinput").css({
		// 		borderColor: ' #ea4d4d',
		// 		color: 'red'
		// 	});
		// 	pwarning.text("Hey, mehn ! add your Username! Here");
		// }
	});
	$("#btnalert").click(function() {
		console.log($("#btninput").val());
	});

});




var myFlower = {};
myFlower.height=10;

console.log(myFlower);


// function grow(value) {
// 	return myFlower['height']+value;
// }

var grow =(value)=>{
	return myFlower.height+value;
}

console.log(grow(23));