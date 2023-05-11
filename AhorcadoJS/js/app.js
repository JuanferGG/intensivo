// ! Variables de entorno
const arrayWords = ["amor", "adios", "androide", "casa", "jaula"];

// ! Variables HTML
const inputLetter = document.getElementById("letter");
const btnSend = document.getElementById("btn-send-letter");
const longWord = document.getElementById("longWord");
const start = document.getElementById("start");

// ?Functions
function getMethod() {
    const letterWord = document.getElementsByClassName("letter");
    let errors = 5;
    const countWIn = 0;
    const HTMLword = [];
    for (let i = 0; i < letterWord.length; i++) {
        HTMLword.push(`${letterWord[i].textContent}`);
    }
    for (let x = 0; x < HTMLword.length; x++){
        if (inputLetter.value == String(`${HTMLword[x]}`)){
            letterWord[x].classList.add('letterOK')
        } else if (inputLetter.value != String(`${HTMLword[x]}`)) {
            errors = errors - 1
        } else {
        }
        console.log(errors)
    }
    console.log(letterWord)
}
// * Start Game
function startGame() {
    const word =
        arrayWords[Math.floor(Math.random() * arrayWords.length)].split("");
    const HTMLword = []; //* ----------> palabra a renderizar
    for (let i = 0; i < word.length; i++) {
        HTMLword.push(`<div class='letter' id='letterWord'>${word[i]}</div>`);
        longWord.innerHTML = HTMLword.join("");
    }
    // console.log(HTMLword)
}

// ? Function Send
btnSend.addEventListener("click", getMethod);
start.addEventListener("click", startGame);
