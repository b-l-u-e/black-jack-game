let cards = []
let sum = 0
let message = ""

let hasBlackjack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let startBtn = document.getElementById("start-btn")
let newBtn = document.getElementById("new-btn")

//  create random function
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

//  start game

startBtn.addEventListener("click", () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
})

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }

    messageEl.textContent = message
}

// new card
newBtn.addEventListener("click", () => {
    if (isAlive === true && hasBlackjack === false && sum < 21) {

        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
})