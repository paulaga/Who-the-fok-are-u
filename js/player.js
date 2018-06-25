function Player (board) {
  this.characterSelected = [];
  this.isNotArray = [];
  //this.board = board;
}


Player.prototype.selectCard = function (character, cards) {
  /* Sobre la carta que clicke Reportar la card clicked al player y guardarla como elegida */
  console.log(cards)
  for (var i = 0; i < cards.length; i++) {
    console.log (cards[i])
    if (cards[i].name == character) {
      return this.characterSelected.push(cards[i]);
      

    }
  }
  console.log (this.characterSelected)

  //return Player2.characterSelected = Math.floor(Math.random)
};

Player.prototype.selectQuestion = function () {

}




