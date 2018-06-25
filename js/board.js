var cards = [
  { name: "gafas",          color:  "red",   answer: [0, 2]},
  { name: "sombrero",             color:  "green",   answer: [1]},
  { name: "barba",                color:  "blue",   answer: [2]},
  { name: "gafas sombrero",       color:  "pink",   answer: [0,1]},
  { name: "gafas sombrero barba",  color:  "blue",   answer: [0, 1, 2]},
];

function Board () {
  this.cards = cards;
  this.questions = [  "Tiene gafas?",
                      "Lleva sombrero?",
                      "Tiene barba?"]
}

$(function(){


// Barajar
Board.prototype.shuffleCards = function () {

  var copy = [], n = this.cards.length, i;

  while (n) {
    i = Math.floor(Math.random() * this.cards.length);
    if (i in this.cards) {
      copy.push(this.cards[i]);
      delete this.cards[i];
      n--;
    }
  }  
  this.cards = copy;
  return copy;
}



// Personaje elegido
Board.prototype.selectCharacter = function (card) {
  /* Al clickar una carta reportar la card clicked al player 1 */
  
  /* Asignar una carta seleccionada random al player2 - 
  ¿Esto podría ser otra función a la que se llame aquí?*/
  return this.characterSelected = "";
}

// Pregunta elegida
Board.prototype.selectQuestion = function () {
  /* 1. Comparar si el nº índice de la pregunta está en el answer array de characterSelected */
  /* 2a. Si SI está: Devolver las cartas en las que NO está */
  /* 2b. Si NO está: Devolver las cartas en las que SI está */
  /* 3. Pintar esas cartas a un array whoIsNot */
  
  //for (var i = 0; i <= largo del array del answer card; i++){
  //  if (questions[nº del indice] == ) {
  //  }
  //}

}

// Cartas que responden no a la pregunta
Board.prototype.whoIsNot = function () {
  /* 1. Coger el array whoIsNot
  /* 2. Tachar o dar vuelta a esas cards */
  /* 3. Poner array a cero [] */
}

// Termina cuando solo queda una carta descubierta
Board.prototype.finished = function () {
  if (this.isNotArray.length == 23) {
    return true;
  } else {
    return false;
  }
}


});