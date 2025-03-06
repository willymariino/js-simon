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
    let num = Math.round(Math.random() * 50) + 1;
    randomNumbers.push(num)
    console.log(num)
}

// mostrare i numeri in pagina

/* come agiungere un elemento a html da javascript
    
        // Creare un nuovo elemento paragrafo
        var nuovoParagrafo = document.createElement("p");
        // Aggiungere del testo al paragrafo
        nuovoParagrafo.textContent = "Questo è un nuovo paragrafo aggiunto con JavaScript.";
        // Aggiungere il paragrafo al contenitore
        document.getElementById("contenitore").appendChild(nuovoParagrafo);
   */
for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement("li")
    li.textContent = randomNumbers[i]
    numbersList.appendChild(li)
}

// ciclo che conta fino a 0 da 30

let count = 30
let countdown = setInterval(guessNumbers, 1000)

function guessNumbers() {

    console.log(count)

    count--

    if (count === 0) {
        console.log("indovina i numeri")
        clearInterval(countdown)
        instructions.textContent = "inserisci i numeri che ricordi"
        numbersList.remove("d-none")
        answersForm.classList.remove("d-none")
        return
    }
    return
}
/* come rimuovere un elemento con javascript
    <script>
        // Seleziona l'elemento da rimuovere
        var paragrafo = document.getElementById('paragrafo'); questo già fatto all'inizio
        // Rimuovi l'elemento
        paragrafo.remove();
    </script>
    */

// controlla i numeri inseriti dall'utente
answersForm.addEventListener("submit", function () {

    const Usernumber = []
    const input = inputGroup.querySelectorAll("input")



})