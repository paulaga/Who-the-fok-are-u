var cards = [
  { name: "uno",        img:  "gafas.jpg",   answer: [0, 2]},
  { name: "dos",        img:  "sombrero.jpg",   answer: [1]},
  { name: "tres",       img:  "",   answer: [2]},
  { name: "cuatro",     img:  "",   answer: [0,1]},
  { name: "cinco",      img:  "",   answer: [0, 1, 2]},
  { name: "seis",       img:  "",   answer: [0, 2]},
  { name: "siete",      img:  "",   answer: [1]},
  { name: "ocho",       img:  "",   answer: [2]},
  { name: "nueve",      img:  "",   answer: [0,1]},
  { name: "diez",       img:  "",   answer: [0, 1, 2]},
  { name: "once",       img:  "",   answer: [0, 2]},
  { name: "doce",       img:  "",   answer: [1]},
  { name: "trece",      img:  "",   answer: [2]},
  { name: "catorce",    img:  "",   answer: [0,1]},
  { name: "quince",     img:  "",   answer: [0, 1, 2]},
  { name: "dieciseis",  img:  "",   answer: [0, 2]},
  { name: "diecisite",  img:  "",   answer: [1]},
  { name: "dieciocho",  img:  "",   answer: [2]},
  { name: "diecinueve", img:  "",   answer: [0,1]},
  { name: "veinte",     img:  "",   answer: [0, 1, 2]},
  { name: "veintiuno",  img:  "",   answer: [0, 2]},
  { name: "veintidos",  img:  "",   answer: [1]},
  { name: "veintitres", img:  "",   answer: [2]},
  { name: "veinticuatro",img:  "",   answer: [0,1]},
];

function Board () {
  this.cards = cards;
  this.questions = [  "Tiene gafas?",
                      "Lleva sombrero?",
                      "Tiene barba?",
                    ]
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
      boardHtml += '<div class="back" name="' + pic.img + '"';
      boardHtml += 'style="background: url(img/' + pic.img + ') no-repeat"></div>';
      boardHtml += "</div>";
    });
    document.getElementById("player_board").innerHTML = boardHtml;

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

/*Board.prototype.setSelectedCard = function (selected) {
  var url = 'url("../img/' + selected.img + '")';
  $(".selected_card").css({"background" : url});
}*/

// Pregunta elegida
Board.prototype.selectQuestion = function (e) {
  
  // 1. Buscar el nº de pregunta en el array questions
  for (var i = 0; i < this.questions.length; i++) {
    if (this.questions[i] == e) {
      this.pickedquestIndex = i;
      console.log(this.pickedquestIndex);
    }  
  }

  // 2. Comparar si el nº índice de la pregunta está en el answer array de characterSelected
  Player1.characterSelector.forEach(function(e) {
    console.log(e.array);
  });

  /* 3a. Si SI está: Devolver las cartas en las que NO está */
  /* 3b. Si NO está: Devolver las cartas en las que SI está */
  /* 4. Pintar esas cartas a un array whoIsNot */
  
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