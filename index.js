var r1 = Math.floor((Math.random()*6)+1);
var randomDiceImage1 = "image/dice" + r1 +".png";
document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage1)


var r2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "image/dice" + r2 +".png";
document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2)


if(r1>r2){
  document.querySelector('h1').innerHTML='🚩Player 1 is winner';
}
else if(r1<r2){
  document.querySelector('h1').innerHTML='Player 2 is winner🚩';
}
else
{
  document.querySelector('h1').innerHTML='Match 📍 Draw!!!';
}
document.querySelector('#reload').addEventListener("click", function() {
  console.log("i got clicked!");
  window.location.reload(true);
});
