$(function() {

  $(".container").hide();
  $("header").hide();
  $("#modal_chose").hide();
  $("#pc_questions").hide();
  $("#win").hide();

  // PLAY
  $(".play").on("click", function (){
    $(this).hide();
    $(".container").show();
    $("header").show();
    $("#modal_chose").show();
    $(".back").hide();
  });

  var boardGame = new Board();
  boardGame.create();

  // Elegir personaje
  $("#modal_chose").on("click", function() {
    $(this).hide();
  });

  $(".person").on("click", function() {
    var character = $(this).attr("id");
    console.log(character);
    if (!boardGame.characterSelected) {
      boardGame.Player1.selectCard(character, boardGame.cards);
      $(".person").removeClass("pointer");
    }
  });

  // Seleccionar pregunta
  $(".question").on("click", function () {
    $(this).parent().remove();
    $(".carousel-item:first").addClass("active");
    console.log($(this).text());
    var pickedQ = $(this).text();
    boardGame.selectQuestion(pickedQ, boardGame.Player1); 
  });

  // Responder pregunta de PC
  $("#pc_questions button").on("click", function () {
    //PlayerPC.pcTurn();
    boardGame.selectQuestion(boardGame.PlayerPC.quest, boardGame.PlayerPC); 
    $("#pc_questions").hide();
    console.log(boardGame.PlayerPC.quest)
  });
  
});