var cards = [
  { name: "alejandro",        img:  "alejandro.jpg",   answer: [0, 1]},
  { name: "alfredo",        img:  "alfredo.jpg",   answer: [2]},
  { name: "ana",       img:  "ana.jpg",   answer: [0,3,4]},
  { name: "anita",     img:  "anita.jpg",   answer: [5,6,13]},
  { name: "bernardo",      img:  "bernardo.jpg",   answer: [7,8]},
  { name: "carlos",       img:  "carlos.jpg",   answer: [1,5]},
  { name: "clara",      img:  "clara.jpg",   answer: [2,9,10]},
  { name: "david",       img:  "david.jpg",   answer: [5,11]},
  { name: "ernesto",      img:  "ernesto.jpg",   answer: [5,10]},
  { name: "felipe",       img:  "felipe.jpg",   answer: [0,3,11,13]},
  { name: "german",       img:  "german.jpg",   answer: [2,12]},
  { name: "guillermo",       img:  "guillermo.jpg",   answer: [2,12,13]},
  { name: "jorge",      img:  "jorge.jpg",   answer: [7,14]},
  { name: "manuel",    img:  "manuel.jpg",   answer: [1,3,8]},
  { name: "maria",     img:  "maria.jpg",   answer: [8,11]},
  { name: "pablo",  img:  "pablo.jpg",   answer: [9,14]},
  { name: "paco",  img:  "paco.jpg",   answer: [2,3]},
  { name: "pedro",  img:  "pedro.jpg",   answer: [14]},
  { name: "pepe", img:  "pepe.jpg",   answer: [3,5,9]},
  { name: "ricardo",     img:  "ricardo.jpg",   answer: [1,8,11,12]},
  { name: "roberto",  img:  "roberto.jpg",   answer: [8,13]},
  { name: "samuel",  img:  "samuel.jpg",   answer: [9,12,14]},
  { name: "susana", img:  "susana.jpg",   answer: [13,14]},
  { name: "tomas",img:  "tomas.jpg",   answer: [0,9,12]},
];

var questions = [ "Es moren@?",
                  "Tiene bigote?",
                  "Es peliroj@?",
                  "Tiene el pelo rizado?",
                  "Usa pendientes?",
                  "Es rubi@?",
                  "Tiene coleta?",
                  "Lleva sombrero?",
                  "Es castañ@?",
                  "Tiene gafas?",
                  "Lleva sombrero?",
                  "Tiene barba?",
                  "Es calvo?",
                  "Tiene chapetas?",
                  "Tiene el pelo blanco?"
                ]

function Board () {
  this.cards = cards;
  this.remainCardsPlayer = cards.slice();
    //this.isNotArray = [];
  //this.remainCards = [];
  this.remainCardsPc = cards.slice();
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
    // Shuffle cards
    this.shuffleCards(); 

    // Generate cards HTML
    var boardHtml = "";
    this.cards.forEach(function(pic, index) {
      boardHtml += '<div class= "card" id="' + pic.name + '">';
      boardHtml += '<div class="back"></div>';
      boardHtml += '<div class="front" name="' + pic.img + '"';
      boardHtml += 'style="background: url(img/' + pic.img + ') no-repeat"></div>';
      boardHtml += "</div>";
    });
    document.getElementById("player_board").innerHTML = boardHtml;
    document.getElementById("pc_board").innerHTML = boardHtml;

    // Generate questions
    var questHtml = "";
    this.questions.forEach(function(e) {
      questHtml += '<div class="carousel-item">';
      questHtml += '<p class="question">' + e + '</p>'
      questHtml += '</div>'
    });
    $(".carousel-inner").append(questHtml);
    $(".carousel-item:first").addClass("active");

}

// Pregunta elegida
Board.prototype.selectQuestion = function (q, p) {
  // 1. Buscar el nº de pregunta en el array questions
  for (var i = 0; i < this.questions.length; i++) {
    if (this.questions[i] == q) {
      this.pickedquestIndex = i;
    }  
  }
  var picked = this.pickedquestIndex;

  this.pickedCheck(p, picked)

  /* 4. Pintar esas cartas a un array whoIsNot */

}

// 2. Comparar si el nº índice de la pregunta está en el answer array de characterSelected
Board.prototype.pickedCheck = function (p, picked) {
  if (p.characterSelected.answer.includes(picked)) {
    for (var i = 0; i < this.remainCardsPlayer.length; i++) {
      if (!(this.remainCardsPlayer[i].answer.includes(picked))) {
        p.isNotArray.push(this.remainCardsPlayer[i]);
      } 
    }
  } else {
    for (var i = 0; i < this.remainCardsPlayer.length; i++) {
      if (this.remainCardsPlayer[i].answer.includes(picked)) {
        p.isNotArray.push(this.remainCardsPlayer[i]);
      }
    }
  } 
  console.log(p.isNotArray)

  this.hideCards(p.isNotArray);
  this.remainCardsPlayer = this.compareAnswer(this.remainCardsPlayer, p.isNotArray);
  console.log(this.remainCardsPlayer);
  
}

Board.prototype.compareAnswer = function (allCards, selectedCards) {
  return allCards.filter(function (allC) {
    return !selectedCards.find(function (selC) {
      return allC.name === selC.name
    });
 });
}

Board.prototype.hideCards = function (isNot) {
  for (var i = 0; i < isNot.length; i++) {
    //for (var j = 0; j < cardId.length; j++){
      var x = $('#player_board #' + isNot[i].name + ' .back').show();

      console.log(x);
      //x.addClass('card-opacity');
      // if (isNot[i].name == cardId.attr('id')){
      //   $(".back").show();
      //   $(".front").hide();
      // }
    //}
  }
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