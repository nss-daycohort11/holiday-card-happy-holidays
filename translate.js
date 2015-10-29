$document.ready(function);

// private interface, no one can change //

var translator = (function () {
    var holidayMsg = {
        "merry": "Joyeux",
        "christmas": "noel",
        "and": "et",
        "a": "un",
        "happy": "content",
        "new": "neuf",
        "year": "an"
    }
    // the beginning of IIFE statement public interface //
    
    return{
    	
    	translateToFrench: function() {
    		phrase = document.getElementById('input').value; 
  			phrase = phrase.replace(/merry/g, "Joyeux"); 
  			phrase = phrase.replace(/christmas/g, "noel"); 
  			phrase = phrase.replace(/and/g, "et"); 
  			phrase = phrase.replace(/a/g, "un"); 
  			phrase = phrase.replace(/happy/g, "content"); 
  			phrase = phrase.replace(/new/g, "neuf"); 
  			phrase = phrase.replace(/year/g, "an"); 

    		return translatedMessage;
    	}
    }
})();




















