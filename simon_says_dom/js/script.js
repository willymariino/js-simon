const countdownElement = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputGroup = document.getElementById("input-group");
const message = document.getElementById("message");

// quanti numeri generare
const numberCount = 5
const timerDuration = 30


// generatore di numeri casuali
const randomNumbers = []
for (let i = 0; i < numberCount; i++) {
    let num = Math.round(Math.random() * 50) + 1
    randomNumbers.push(num)
} console.log(num)
