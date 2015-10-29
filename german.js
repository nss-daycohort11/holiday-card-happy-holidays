
var Translator = (function (){
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

		translateToGerman: function(message) {
			console.log(message);	
  			//First, split input text string into an array.
  			var translateMsg = message.split(" ");
  			//Second, declare a variable for new string.
  			var translatedString = "";
  			//Third, use a 'for' loop to cycle through the array.
  			for (var i = 0; i < translateMsg.length; i++) {
  				//Fourth, declare variable to capture the current word.
  				var currentWord = translateMsg[i];
  				//Fifth, concatenate the words after extracting the corresponding object key from the holidayMsg {}.
  				translatedString += " " + holidayMsg[currentWord];

  			};
			
			console.log("translatedString", translatedString);
			//Lastly, return the concatenated string.
			return translatedString;
		}
	}

}) (Translator);

// $(document).ready(function() {

// 	var retrievedMsgInputs; 

// 	$("#trans-btn").click(function () {
//     	retrievedMsgInputs = $("#input").val();
//  		console.log("input msg", retrievedMsgInputs);
//  		Translator.translateToGerman(retrievedMsgInputs);
// 	});

// });


