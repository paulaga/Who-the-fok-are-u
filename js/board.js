function Board () {
    this.cards = cards;
    this.characterSelected;
    this.characterComputer;
    this.pickedquestIndex;
    this.questions = questions;
    
    this.clickAudio = new Audio();
    this.clickAudio.src = "../src/click_sound_4.mp3";
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
    
    this.Player1 = new Player(this, false);
    this.PlayerPC = new Player(this, true);
    
    this.shuffleCards();
    
    // Generate boards
    var boardHtml = "";
    this.cards.forEach(function(e) {
      boardHtml += '<div class= "person pointer" id="' + e.name + '">';
      boardHtml += '<div class="front" name="' + e.img + '"';
      boardHtml += 'style="background: url(../img/' + e.img + ') no-repeat; background-size: contain"></div>';
      boardHtml += '<div class="back hidden"></div>';
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
  //1. Busca nº de pregunta en el array questions
  Board.prototype.selectQuestion = function (q, player) {
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i] == q) {
        this.pickedquestIndex = i;
      }  
    }
    var picked = this.pickedquestIndex;
    
    this.pickedCheck(player, picked)
  }
  
  //2. Compara si el nº está en character.answer 
  //   compara con el resto de cards y guarda en isNotArray
  Board.prototype.pickedCheck = function (player, picked) {
    var character = this.characterSelected;
    if (!player.pc) {
      character = this.characterComputer;
    } 
    if (character.answer.includes(picked)) {
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
    
    this.hideCards(player);
    player.remainCards = this.compareAnswer(player.remainCards, player.isNotArray);  
  }
  
  //3. Actualiza array cards en función de las que quedan 
  Board.prototype.compareAnswer = function (allCards, selectedCards) {
    return allCards.filter(function (allC) {
      return !selectedCards.find(function (selC) {
        return allC.name === selC.name
      });
    });
  }
  
  // Oculta img de personajes
  Board.prototype.hideCards = function (player) {
    this.clickAudio.play();
    var isNot = player.isNotArray;
    if (!player.pc) {
      for (var i = 0; i < isNot.length; i++) {
        $('#player_board #' + isNot[i].name + ' .back').show();
      }
      if (this.finished(player)) {
        $("#win h2").text("Es " + this.characterComputer.name);
        $("#win h1").text("You win!!!!!");
        $(".pc_selected").removeClass("hidden");
        $(".pc_selected_card").hide();
        $("#win").show();
      } else {
        var that = this;
        setTimeout(function(){
          that.PlayerPC.pcTurn();
        }, 1300)
      }
    } else {
      for (var i = 0; i < isNot.length; i++) {
        $('#pc_board #' + isNot[i].name + ' .back').show();
      }
      if (this.finished(player)) {
        $("#win h1").text("GAME OVER");
        $("#win h2").text("La máquina gana");
        $("#win").show();
      }
    }
  }
  
  // The end
  Board.prototype.finished = function (player) {
    if (player.isNotArray.length >= 23) {
      return true;
    } else {
      return false;
    }
  }