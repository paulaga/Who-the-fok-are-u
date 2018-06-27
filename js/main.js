$(function() {

  $(".container").hide();
  $("#modal_chose").hide();
  $("#pc_questions").hide();

  // PLAY
  $(".play").on("click", function (){
    $(this).hide();
    $(".container").show();
    $("#modal_chose").show();
    $(".back").hide();
  });

  var boardGame = new Board();
  boardGame.create();
  var Player1 = new Player(boardGame, false);
  var PlayerPC = new Player(boardGame, true);

  /* 1. Boton para elegir personaje */
  $("#modal_chose").on("click", function() {
    $(this).hide();
  });

  /* 2. Turno 1 - Eligiendo personaje */
  $(".person").on("click", function() {
    var character = $(this).attr("id");
    console.log(character);
    if (!Player1.characterSelected) {
      Player1.selectCard(character, boardGame.cards);
      $(".person").removeClass("pointer");
    }
  });

  // 3. Seleccionar pregunta
  $(".question").on("click", function () {
    /**/$(this).css({"color" : "red"});
    console.log($(this).text());
    var pickedQ = $(this).text();
    boardGame.selectQuestion(pickedQ, Player1); 
  });

  $("#pc_questions button").on("click", function () {
    boardGame.selectQuestion(PlayerPC.pcQuest, PlayerPC); 
    $("#pc_questions").hide();
  });
  
});
