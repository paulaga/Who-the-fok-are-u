$(function() {

  $("#pc_questions").hide();
  $("#win").hide();
  $("#modal_quest").hide();

  var playAudio = new Audio("src/play.mp3");
  playAudio.play();

  var gameAudio = new Audio("../src/game.mp3");
  
  // PLAY
  $(".play-btn").on("click", function (){
    playAudio.pause();
  });
  
  var boardGame = new Board();
  boardGame.create();
  gameAudio.play();
  gameAudio.loop = true;

  $("#win").on("click", function (){
    $(this).hide();
    location.reload();
  })

  // Elegir personaje
  $("#modal_chose").on("click", function() {
    $(this).hide();
  });

  $(".person").on("click", function() {
    var character = $(this).attr("id");
    if (!boardGame.characterSelected) {
      boardGame.Player1.selectCard(character, boardGame.cards);
      $(".person").removeClass("pointer");
    }
  });

  // Elegir pregunta
  $("#modal_quest").on("click", function() {
    $(this).hide();
  });

  // Seleccionar pregunta
  $(".question").on("click", function () {
    if($(".pc_selected_card").css("background").includes('url')) {
      $(this).parent().remove();
      $(".carousel-item:first").addClass("active");
      var pickedQ = $(this).text();
      boardGame.selectQuestion(pickedQ, boardGame.Player1); 
    } else {
      $("#modal_chose").show();
    }
  });

  // Responder pregunta de PC
  $("#pc_questions button").on("click", function () {
    boardGame.selectQuestion(boardGame.PlayerPC.quest, boardGame.PlayerPC); 
    $("#pc_questions").hide();
  });
  
});