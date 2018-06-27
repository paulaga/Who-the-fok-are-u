$(function() {

  $(".container").hide();
  $(".modal").hide();

  // PLAY
  $(".play").on("click", function (){
    $(this).hide();
    $(".container").show();
    $(".modal").show();
    $(".back").hide();
  });

  var boardGame = new Board();
  boardGame.create();
  var Player1 = new Player(boardGame);
  //var PlayerPC = new Player(boardGame);

  /* 1. Boton para elegir personaje */
  $(".modal").on("click", function() {
    $(this).hide();
    /* Al confirmar se oculta */
  });

  /* 2. Turno 1 - Eligiendo personaje */
  $(".card").on("click", function() {
    var character = $(this).attr("id");
    console.log(character);
    if (!Player1.characterSelected) {
      Player1.selectCard(character, boardGame.cards);
    }
  });

  // 3. Seleccionar pregunta
  $(".question").on("click", function () {
    /**/$(this).css({"color" : "red"});
    console.log($(this).text());
    var pickedQ = $(this).text();
    boardGame.selectQuestion(pickedQ, Player1); 
  });
  
});
