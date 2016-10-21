console.log("We're connected!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	alert("Match!");
} else if (cardThree === cardFour){
	alert("Match!");
} else if (cardOne === cardThree){
	alert("Sorry, try again.");
} else if(cardTwo === cardFour){
	alert("Sorry, try again.");
}

