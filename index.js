n1 = Math.floor(Math.random() * 6) + 1;
n2 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "dice" + n1 + ".png";
var diceImage2 = "dice" + n2 + ".png";
document
  .querySelectorAll(".dice img")[0]
  .setAttribute("src", "images/" + diceImage1);

document
  .querySelectorAll(".dice img")[1]
  .setAttribute("src", "images/" + diceImage2);

if (n1 > n2) {
  document.querySelector(".container h1").innerHTML = "Player1 Win!";
} else if (n1 < n2) {
  document.querySelector(".container h1").innerHTML = "Player2 Win!";
} else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
