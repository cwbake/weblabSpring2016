upperCaseFirstLetters("something to uppercase");//"Something To Uppercase"
upperCaseFirstLetters("output"); //"Output"
upperCaseFirstLetters("nathan t white");//"Hello There"
upperCaseFirstLetters("       hello there     ");// "Hello There"


// var upperCaseFirstLetters = (aStr) {
//     var cleaned = aStr.trim();
//     var words = cleaned.split(" ");
// The way above is valid but not ideal for this example.

function upperCaseFirstLetters (aStr) {
    var cleaned = aStr.trim();
    var words = cleaned.split(" ");
}
// Doing it this way "hoists" it
