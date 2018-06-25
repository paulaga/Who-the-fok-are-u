$(function() {
  

  /* Pintar board */
  var boardGame = new Board();

  var Player1 = new Player(boardGame);
  var Player2 = new Player();

  // Shuffle cards
  boardGame.shuffleCards(); 

  // Generate HTML
  var html = "";
  boardGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back" name="' + pic.color + '"></div>';
    html += "</div>";
  });
  document.getElementById("player_board").innerHTML = html;

  /* 1. Boton para elegir personaje */
  $("#btn_chose").on("click", function() {
    $(this).hide();
    /* Al confirmar se oculta */
  });

  /* 2. Turno 1 - Eligiendo personaje */
  $(".card").on("click", function() {
    var character = $(this).attr("id");
    console.log(character)
    Player1.characterSelected = Player1.selectCard(character, boardGame.cards);

    /* Deshabilitar cards */ $(this).disabled = true;
    /* draw selected card on player card */
    /* call question turn */
  });

  // Turnos
  //Game.prototype.start = function () {
  //  memoryGame.shuffleCard(cards);
  //
  //};
});
