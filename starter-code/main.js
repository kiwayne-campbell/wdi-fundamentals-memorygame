var cardone = "queen"
var cardtwo = "queen"
var cardthree = "king"
var cardfour = "king"

// if (cardone === cardtwo || cardthree === cardfour) { 
	//alert("You Found a Match");
//}
//else {alert("Sorry, try again");}


var gameBoard = document.getElementById("game-board");

var createBoard = function() { 
	for (var i = 0; i < cards.length; i++;) {
		var cardElement = document.createElement('div');
		cardElement.className = "card";
		gameBoard.appendChild(cardElement);

	}
};
createBoard();

// stuck on making cards flip and adding img

// var cards = [‘queen', ‘queen', ‘king', ‘king’];
//var cardsInPlay = [];

// instead of looping through a fixed number
// loop through the length of the cards
//for (var i = 0; i< cards.length; i++) {

  // this will set the card's 'data-card' to be the element of the array
  // data- attributes are meant to store data about an element that is not
  // tied to a style.
  // i.e. "king"
  //cardElement.setAttribute('data-card', cards[i]);}


//for (var i=0; i<cards.length; i++) {

  // when a card is clicked the function isTwoCards will be executed
   // cardElement.addEventListener('click', isTwoCards) }

//checks to see cards are a match
//function isMatch() {   if (card[0] === card[1] || card[2] === card[3]) { 
	//alert("You Found a Match");}
//else {alert("Sorry, try again”);}

//checks to see if there are cards in play
//function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  //cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  //if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    //isMatch(cardsInPlay);

    // clear cards in play array for next try
    //cardsInPlay = []; } }