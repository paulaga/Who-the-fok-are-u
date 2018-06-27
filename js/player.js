function Player (board, pc) {
  this.board = board;
  this.pc = pc;
  this.isNotArray = [];
  this.remainCards = board.cards.slice();
  this.remainQuest = questions;
  this.doneQuests = [];
  this.pcQuest;
}

// Select card
Player.prototype.selectCard = function (character, cards) {

  this.board.characterComputer = cards[Math.floor (Math.random() * cards.length)];
  var pcUrl = 'url("img/who.jpg")';
  $(".pc_selected_card").css({background : pcUrl});
  
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].name == character) {
      this.board.characterSelected = cards[i];
      console.log(this.board.characterComputer);
      console.log (this.board.characterSelected);
      var url = 'url("img/' + cards[i].img + '")';
      $(".selected_card").css({background : url});
    }
  }
};

// Turno PC
Player.prototype.pcTurn = function () {
  this.pcQuest = this.remainQuest[Math.floor (Math.random() * this.remainQuest.length)];
  $("#pc_questions p").text(this.pcQuest);
  $("#pc_questions").show();
}
