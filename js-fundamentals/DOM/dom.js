var numberofclicks = 0;

const img = document.getElementById("image");

function clicked() {
  numberofclicks++;

  document.getElementById("demo").innerHTML =
    "Number of clicks: " + numberofclicks;

  img.src = "cocosmile.jpeg";

  setTimeout(() => {
    img.src = "coco.jpg";
  }, 200);
  img.style.transform = "scale(1.05)";
  img.style.transition = "all 0.2s";
  setTimeout(function () {
    img.style.transform = "scale(1)";
  }, 200);
}
var directions = ["up", "down", "left", "right"];
var randomDirection = directions[Math.floor(Math.random() * directions.length)];
document.getElementById("marki")[0].setAttribute("direction", randomDirection);

window.onload = function () {
  img = document.getElementById("image");
};
