var randomNumber1 = Math.floor(Math.random()*6+1); //1-6
var randomNumber2 = Math.floor(Math.random()*6+1); // 1-6
var randImg1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
var randImg2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", randImg1);
document.getElementsByClassName("img2")[0].setAttribute("src", randImg2);
if(randomNumber1 > randomNumber2){
  document.querySelector("div h1").innerText = "🚩 Player 1 Wins!";
}
if(randomNumber2 > randomNumber1){
  document.querySelector("div h1").innerText = "Player 2 Wins! 🚩";
}
if(randomNumber2 == randomNumber1){
  document.querySelector("div h1").innerText = "Draw!";
}
