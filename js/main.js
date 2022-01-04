$(document).ready(function () {
  $("#lightSlider").lightSlider();
});

$(document).ready(function () {
  $(".burger").on("click", function () {
    $("nav").slideToggle("fast");
  });
});
