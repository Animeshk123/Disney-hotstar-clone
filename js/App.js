var over = document.querySelector(".over");
var side = document.querySelector(".slidenav")
var bar = document.querySelector(".bar");
bar.addEventListener("click", function() {
  side.classList.add("slideadd");
  over.classList.add("overadd");
});
over.addEventListener("click", function() {
  side.classList.remove("slideadd");
  over.classList.remove("overadd");
});
var btn = document.querySelector(".btn");
var ball = document.querySelector(".ball");
btn.addEventListener("click", function() {
  ball.classList.toggle("balladd");
});




