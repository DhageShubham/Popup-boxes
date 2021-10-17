$(document).ready(function () {
  $("#open").click(function () {
    $(".model-container").css("transform", "scale(1)");
  });

  $("#close").click(function () {
    $(".model-container").css("transform", "scale(0)");
  });

  $(".model-container").click(function () {
    $(".model-container").css("transform", "scale(0)");
  });
  $("#cancel").click(function () {
    $(".model-container").css("transform", "scale(0)");
  });
});
