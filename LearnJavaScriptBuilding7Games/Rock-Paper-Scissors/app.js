//pega o h2 pelo id computer-choice e coloca dentro de uma const
const computerChoiceDisplay = document.getElementById('computer-choice')
// pega h2 id user-choice
const userChoiceDisplay = document.getElementById('user-choice')
//pega h2 id result
const resultDisplay = document.getElementById('result')
//pega todos os botões por class 'button' rock, paper scissors
const possibleChoice = document.querySelectorAll('button')
//definnindo variáveis global
let userChoice
let computerChoice
let result
// possibleChoice pega todos os botões, cria um forEach
possibleChoice.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', e => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  })
)

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 //ou você pode usar possibleChoice.lenght
  console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }

  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }

  if (randomNumber === 3) {
    computerChoice = 'paper'
  }

  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = `it/'s a draw`
  }

  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = `you win!`
  }

  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = `you lose!`
  }

  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = `you win!`
  }

  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = `you lose!`
  }

  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = `you win!`
  }

  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = `you lose!`
  }

  resultDisplay.innerHTML = result
}
