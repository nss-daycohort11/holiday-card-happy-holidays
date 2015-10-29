$(document).ready(function() {

var translator = function (){
	var holidayMsg = {
		"merry": "Frohe",
		"christmas": "Weihnachten",
		"and": "und",
		"a": "ein",
		"happy": "gutes",
		"new": "neues",
		"year": "Jahr"
	}

	return {
		translateToGerman: function (message) {
			message = document.getElementById("input").value; 
  			message = message.replace(/merry/g, "Frohe"); 
  			message = message.replace(/christmas/g, "Weihnachten"); 
  			message = message.replace(/and/g, "und"); 
  			message = message.replace(/a/g, "ein"); 
  			message = message.replace(/happy/g, "gutes"); 
  			message = message.replace(/new/g, "neues"); 
  			message = message.replace(/year/g, "Jahr"); 

  			document.getElementById("german-trans").value = message;

			return message;
			console.log("translateToGerman", translateToGerman);
		}
	}

} ();

});

$(".enter-btn").click(function retrieveNumInput() {
    var retrievedNumInputs = $(".num-input").val().split(","); //makes an array inside html

 	console.log(retrievedNumInputs);
});


