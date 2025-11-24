function generateRandNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let randNumber = generateRandNumber();
let pokusaji = 0;

const input = document.getElementById("guess");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const newGameBtn = document.getElementById("novaIgra");

function updateAttempts() {
    attempts.innerHTML = "Pokusaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event) {
    event.preventDefault();
    let value = parseInt(input.value);

    if (isNaN(value) || value < 1 || value > 100) {
        message.innerHTML = "Unesi broj između 1 i 100";
        message.style.color = "crimson";
        return;
    }

    pokusaji++;
    updateAttempts();

    if (value === randNumber) {
        message.innerHTML = "Čestitamo! Pogodili ste broj " + randNumber + " u " + pokusaji + " pokušaja.";
        message.style.color = "green";
        input.disabled = true;
    } else if (value < randNumber) {
        message.innerHTML = "Pokušaj veći broj.";
        message.style.color = "blue";
    } else {
        message.innerHTML = "Pokušaj manji broj.";
        message.style.color = "blue";
    }
}

function newGame() {
    randNumber = generateRandNumber();
    pokusaji = 0;
    input.disabled = false;
    input.value = '';
    message.innerHTML = "Nova Igra";
    updateAttempts();
}

newGameBtn.addEventListener("click", newGame);
