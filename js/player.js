function Player (board, pc) {
  this.pc = pc;
  this.characterSelected;
  this.characterComputer;
  this.isNotArray = [];
  this.remainCards = board.cards.slice();
  this.remainQuest = questions;
}

Player.prototype.selectCard = function (character, cards) {
  // Player PC
  this.characterComputer = cards[Math.floor (Math.random() * cards.length)];
  var pcUrl = 'url("img/who.jpg")';
  $(".pc_selected_card").css({background : pcUrl});
  
  // Player 1
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].name == character) {
      this.characterSelected = cards[i];
      console.log(this.characterComputer);
      console.log (this.characterSelected);
      var url = 'url("img/' + cards[i].img + '")';
      $(".selected_card").css({background : url});
    }
  }
};

Player.prototype.selectQuestion = function (q, p) {
  for (var i = 0; i < this.questions.length; i++) {
    if (this.questions[i] == q) {
      this.pickedquestIndex = i;
    }  
  }
  var picked = this.pickedquestIndex;

  this.pickedCheck(p, picked)
}


Player.prototype.pcTurn = function () {
  var pcQuest = this.remainQuest[Math.floor (Math.random() * this.remainQuest.length)];
  console.log(pcQuest)
}

