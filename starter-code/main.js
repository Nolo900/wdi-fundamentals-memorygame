var cardsInPlay = [];
var cards = ["king","king","queen","queen"];

createCards();


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    hideCards();
  }
};

function isMatch(arr){
	return arr.every(function(element){
    	return element === arr[0];
  });
}

function createCards(){
	var myGameBoard = document.getElementById('game-board');

	for (i=0;i<cards.length;i++){
		var cardDiv = document.createElement('div');
		cardDiv.className = "card";
		cardDiv.setAttribute("data-card",cards[i]);
		myGameBoard.appendChild(cardDiv);
		cardDiv.addEventListener('click',unhideCard);
		cardDiv.addEventListener('click',isTwoCards);
	}
	addCardImages(cardDiv);

}


function isTwoCards(){

	var cardType = this.getAttribute('data-card');

	cardsInPlay.push(cardType);
	if (cardsInPlay.length === 2) {
		if (isMatch(cardsInPlay)){
			alert("You matched them!");
		} else{
			alert("Try again!");
		}
		
		cardsInPlay = [];
		hideCards();
	}
}

function addCardImages(){
	var cardElements = document.querySelectorAll('.card');
	for(i=0;i<cardElements.length;i++){
			cardElements[i].innerHTML = '<img src="card_' + cards[i] +'.png"/>';	
	}
	
};

function hideCards(){
	var cardDivs = document.querySelectorAll(".card");
	for(i=0;i<cardDivs.length;i++){
		cardDivs[i].innerHTML = '';
	}
}

function unhideCard(){
	var cardType = this.getAttribute('data-card');

	if(cardType === 'king'){
		this.innerHTML = '<img src="card_king.png"/>';
		setTimeout(function(){},1000);
	}	else if (cardType === 'queen'){
		this.innerHTML = '<img src="card_queen.png"/>';
		setTimeout(function(){},1000);
	}
	
}



