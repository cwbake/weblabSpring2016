var message= "Hello";

var x = 27;
var temps = [14, 32, 36, 40];
var person = {
  first: "Nate",
  last: "White",
  age: 23,
  address: {
        city: "Fort Collins",
        zip: 80521
  }
};

if(person.age >= 21 && person.age <65) {
    console.log("Hello" + person.first);
}
else if (person.age>=65) {
    console.log("discount time");
}
else {
    console.log("You must leave");
}
greeting("Nate");

function greeting(name) {

}
