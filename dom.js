var inputbox = $("#input");
var dropdown = $("#language");
console.log(dropdown);






// var transBtn = $("#trans-btn");

var text; 
var language;

$("#trans-btn").click(function(e) {
  text = inputbox.val();
  language = dropdown.val(); 
  console.log(text);
  console.log(language);

  if (language === "french") {
    var thing = Translator.translateToFrench(text);
    console.log(thing);
  } else if (language === "german") {
    var thing = Translator.translateToGerman(text);
    console.log(thing);
  } else if (language === "italian") {
    var thing = Translator.translateToItalian(text);
    console.log(thing);

  }
  $("#results").html(thing);
 })


 
// });

