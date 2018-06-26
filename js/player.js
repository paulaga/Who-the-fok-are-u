function Player () {
  this.characterSelected;
  this.characterComputer;
  this.isNotArray = [];
}

Player.prototype.selectCard = function (character, cards) {
  this.characterComputer = cards[Math.floor (Math.random() * cards.length)];
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].name == character) {
      this.characterSelected = cards[i];
      console.log(this.characterComputer);
      console.log (this.characterSelected);
      // Draw card on board
      var url = 'url("img/' + cards[i].img + '")';
      $(".selected_card").css({background : url});
    }

  }
};

Player.prototype.selectQuestion = function () {

}