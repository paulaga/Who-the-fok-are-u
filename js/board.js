function Board () {
  this.cards = cards;
  //this.remainCardsPlayer = cards.slice();
  //this.remainCardsPc = cards.slice();
  this.questions = questions;
  this.pickedquestIndex;
}

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

Board.prototype.create = function() {

  this.shuffleCards();
  
  // Generate boards
  var boardHtml = "";
  this.cards.forEach(function(e) {
    boardHtml += '<div class= "person pointer" id="' + e.name + '">';
    boardHtml += '<div class="front" name="' + e.img + '"';
    boardHtml += 'style="background: url(img/' + e.img + ') no-repeat; background-size: contain"></div>';
    boardHtml += '<div class="back"></div>';
    boardHtml += "</div>";
  });
  document.getElementById("player_board").innerHTML = boardHtml;
  document.getElementById("pc_board").innerHTML = boardHtml;

  // Generate questions
  var questHtml = "";
  this.questions.forEach(function(e) {
    questHtml += '<div class="carousel-item">';
    questHtml += '<p class="question pointer">' + e + '</p>'
    questHtml += '</div>'
  });
  $(".carousel-inner").append(questHtml);
  $(".carousel-item:first").addClass("active");

}

// Ejecuta questions
  // 1. Busca nº de pregunta en el array questions
Board.prototype.selectQuestion = function (q, p) {
  for (var i = 0; i < this.questions.length; i++) {
    if (this.questions[i] == q) {
      this.pickedquestIndex = i;
    }  
  }
  var picked = this.pickedquestIndex;

  this.pickedCheck(p, picked)
}

  // 2. Compara si el nº está en characterSelected.answer 
  //    -- compara con el resto de cards y guarda en isNotArray
Board.prototype.pickedCheck = function (player, picked) {
  if (!player.pc) {
    if (player.characterComputer.answer.includes(picked)) {
      for (var i = 0; i < player.remainCards.length; i++) {
        if (!(player.remainCards[i].answer.includes(picked))) {
          player.isNotArray.push(player.remainCards[i]);
        } 
      }
    } else {
      for (var i = 0; i < player.remainCards.length; i++) {
        if (player.remainCards[i].answer.includes(picked)) {
          player.isNotArray.push(player.remainCards[i]);
        }
      }
    } 
  } else {
    if (player.characterSelected.answer.includes(picked)) {
      for (var i = 0; i < player.remainCards.length; i++) {
        if (!(player.remainCards[i].answer.includes(picked))) {
          player.isNotArray.push(player.remainCards[i]);
        } 
      }
    } else {
      for (var i = 0; i < player.remainCards.length; i++) {
        if (player.remainCards[i].answer.includes(picked)) {
          player.isNotArray.push(player.remainCards[i]);
        }
      }
    } 
  }
  
  console.log(player.isNotArray)

  this.hideCards(player);
  player.remainCards = this.compareAnswer(player.remainCards, player.isNotArray);
  console.log(player.remainCards);
  
}
  // 3. Actualiza array cards en función de las que quedan 
Board.prototype.compareAnswer = function (allCards, selectedCards) {
  return allCards.filter(function (allC) {
    return !selectedCards.find(function (selC) {
      return allC.name === selC.name
    });
 });
}

  // Oculta img de personajes
Board.prototype.hideCards = function (player) {
  console.log(player);
  var isNot = player.isNotArray;
  if (!player.pc) {
    for (var i = 0; i < isNot.length; i++) {
      $('#player_board #' + isNot[i].name + ' .back').show();
    }
  } else {
    for (var i = 0; i < isNot.length; i++) {
      $('#pc_board #' + isNot[i].name + ' .back').show();
    }
  }
  //---- cambiar de turno
}

// The end
Board.prototype.finished = function () {
  if (p.isNotArray.length == 23) {
    return true;
  } else {
    return false;
  }
}