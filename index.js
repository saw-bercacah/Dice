
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 
var randomDiceimg = "dice" +  randomNumber1 +".png";

var sourceIg = "images/"+ randomDiceimg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",sourceIg );


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
var randomDiceimg = "dice" +  randomNumber2 +".png";

var sourceIg = "images/"+ randomDiceimg;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",sourceIg );

if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else{
    document.querySelector("h1").innerHTML ="Draw";
}