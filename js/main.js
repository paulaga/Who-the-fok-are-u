$(function() {


  $(".container").hide();
  $(".modal").hide();

  // PLAY
  $(".play").on("click", function (){
    $(this).hide();
    $(".container").show();
    $(".modal").show();
  });

  var boardGame = new Board();
  boardGame.create();
  var Player1 = new Player(boardGame);
  //var Player2 = new Player();

  /* 1. Boton para elegir personaje */
  $(".modal").on("click", function() {
    $(this).hide();
    /* Al confirmar se oculta */
  });

  /* 2. Turno 1 - Eligiendo personaje */
  $(".card").on("click", function() {
    var character = $(this).attr("id");
    console.log(character);
    Player1.selectCard(character, boardGame.cards);

    //var cards = document.getElementsByClassName("card");
    //for (var i = 0; i < cards.length; i++) {
    //  cards[i].disabled = true;
    //}
    /* draw selected card on player card */
    /* call question turn */
  });

  // 3. Seleccionar pregunta
  $(".question").on("click", function () {
    /**/$(this).css({"color" : "red"});
    console.log($(this).text());
    var pickedQ = $(this).text();
    boardGame.selectQuestion(pickedQ);
  });
  
});
