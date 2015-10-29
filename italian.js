
var Translator = (function(oldTranslator) {

	// Private list of Italian words
	var Italian = {
		"merry":"allegro", 
		"christmas":"natale", 
		"and":"e",
		"a": "un", 
		"happy":"felice", 
		"new":"nuovo", 
		"year":"anno"
	}

	// Translate message to Italian
	oldTranslator.translateToItalian = function(msg) {
		var italianMessage = [];
		var italianVersion = "";
		var i;
		var lowermsg = msg.toLowerCase();
		var msgArray = lowermsg.split(" ");

		console.log(msg.length);
		console.log(msgArray.length);

		for (i = 0; i < msgArray.length; i++) {
			for (var key in Italian) {
  				if (key === msgArray[i]) {
    				italianMessage.push(Italian[key]);
    			}
    		}
    	}

    	// Join Italian word array back into string
    	italianVersion = italianMessage.join(" ");		

    	// Return translated text as string
		return italianVersion;
		console.log(italianVersion);
	}
	return Translator;
})(Translator);



/*var inputbox = $("#input").val();

if (dropdown === "Italian") {
	var finalversion = Translator.translateToItalian(inputbox);
}*/





