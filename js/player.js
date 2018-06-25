function Player (selected) {
  this.characterSelected = selected;
  this.isNotArray = [];
}

Player.prototype.selectCard = function (character, cards) {
  var selected;
  /* Sobre la carta que clicke Reportar la card clicked al player y guardarla como elegida */
  console.log(cards)
  for (var i = 0; i < cards.length; i++) {
    console.log (cards[i])
    if (cards[i].name == character) {
      selected = cards[i];
      console.log("yes")
      console.log(cards[i])
      console.log(selected)

     return selected;
    }
  }

  Player2.characterSelected = cards[Math.floor (Math.random() * cards.length)];
};

Player.prototype.setSelectedCard = function (selected) {
  $(".selected_card").css({"background" : "url(../img/)"})
}


Player.prototype.selectQuestion = function () {

}




