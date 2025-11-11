function randNumber(){
    return Math.floor(Math.random()*100)+1;
}

let randNumber = randNumber();
let pokusaji = 0;

let input = document.getElementById("guess");
let message = document.getElementById("message");
let attempts = document.getElementById("attempts");

function updateAttempts(){
attempts.innerHTML = "Pokusaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event){
event.preventDefault();
let value = parseInt(input.value);
console.log(value)
}

function newGame(){

}