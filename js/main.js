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

  // Elegir personaje
  $("#modal_chose").on("click", function() {
    $(this).hide();
  });

  $(".person").on("click", function() {
    var character = $(this).attr("id");
    console.log(character);
    if (!Player1.characterSelected) {
      Player1.selectCard(character, boardGame.cards);
      $(".person").removeClass("pointer");
    }
  });

  // Seleccionar pregunta
  $(".question").on("click", function () {
    $(this).parent().remove();
    $(".carousel-item:first").addClass("active");
    console.log($(this).text());
    var pickedQ = $(this).text();
    boardGame.selectQuestion(pickedQ, Player1); 
  });

  // Responder pregunta de PC
  $("#pc_questions button").on("click", function () {
    PlayerPC.pcTurn();
    boardGame.selectQuestion(PlayerPC.quest, PlayerPC); 
    $("#pc_questions").hide();
    console.log(PlayerPC.quest)
  });
  
});