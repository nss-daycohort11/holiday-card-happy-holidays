var Translator = (function(oldTranslator) {

    var French = {
        "merry": "Joyeux",
        "christmas": "noel",
        "and": "et",
        "a": "un",
        "happy": "content",
        "new": "neuf",
        "year": "an"
    }

// variables used in loop //
oldTranslator.translateToFrench = function(msg) {
    var frenchMsg = [];
    var frenchVersion = "";
    var i;
    var lowermsg = msg.toLowerCase();
    var frenchArray = lowermsg.split(" ");
    
// beginning of loop //
    for (i = 0; i < frenchArray.length; i++) {

// takes the key and unlocks the value in french //
    	for (var key in French) {

// if the key equals the french word will input into the array //   		
    		if (key === frenchArray[i]) {

// pushing the french words into the empty french array to create msg //
    			frenchMsg.push(French[key]);
          console.log(frenchMsg);
    		}
      }
     }

// joins the french version into an array //
      frenchVersion = frenchMsg.join(" ");

  // returns translated string //
      return frenchVersion;
}

  return Translator;

})(Translator);



