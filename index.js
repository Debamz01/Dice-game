var randomNumberA = Math.floor(Math.random()* 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumberA + ".png"; //dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var imageA = document.querySelectorAll("img")[0];
imageA.setAttribute("src", randomImageSource);



var randomNumberB = Math.floor(Math.random()* 6) + 1; //1-6
var randomImageSourceB = "images/dice" + randomNumberB + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSourceB);


// If player A blitz
if (randomNumberA > randomNumberB) {
  document.querySelector("h1").innerHTML = "Player 1 blitz!";
}

else if (randomNumberB > randomNumberA) {
  document.querySelector("h1").innerHTML = "Player 2 blitz!";
}
else {
document.querySelector("h1").innerHTML = "Draw!";  
}
