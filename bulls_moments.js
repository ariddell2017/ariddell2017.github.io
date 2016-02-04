$(document).ready(function() {
  $(".btn").on("click", addBullsMoment);
  $("ol").on("click", ".link-delete", deleteMoment);
});

function addBullsMoment(){
var text = window.prompt("New Bulls Moment");
var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
$("ol").append("<li>" + text + " " + delete_link + "</li>");
}

function deleteMoment(event) {
  console.info(event);
  $(event.target).parent().fadeOut();
}
