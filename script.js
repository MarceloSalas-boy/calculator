// Fonctions mathématiques
function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) {
  if (b === 0) return "Erreur 😅"
  return a / b
}

// Fonction operate
function operate(operator, a, b) {
  if (operator === "+") return add(a, b)
  else if (operator === "-") return subtract(a, b)
  else if (operator === "*") return multiply(a, b)
  else if (operator === "/") return divide(a, b)
}

// Variables
let firstNumber = ""
let secondNumber = ""
let currentOperator = ""
let shouldResetDisplay = false

// Selectionner les elements
const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalsBtn = document.querySelector("#equals")
const clearBtn = document.querySelector("#clear")

// Boutons chiffres
numbers.forEach(button => {
  button.addEventListener("click", () => {
    if (shouldResetDisplay) {
      display.textContent = ""
      shouldResetDisplay = false
    }
    if (display.textContent === "0") {
      display.textContent = button.textContent
    } else {
      display.textContent += button.textContent
    }
  })
})

// Boutons operateurs
operators.forEach(button => {
  button.addEventListener("click", () => {
    if (firstNumber !== "" && currentOperator !== "" && !shouldResetDisplay) {
      secondNumber = display.textContent
      const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber))
      display.textContent = Math.round(result * 1000) / 1000
      firstNumber = display.textContent
    } else {
      firstNumber = display.textContent
    }
    currentOperator = button.textContent
    shouldResetDisplay = true
  })
})

// Bouton equals
equalsBtn.addEventListener("click", () => {
  if (firstNumber === "" || currentOperator === "") return
  secondNumber = display.textContent
  const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber))
  display.textContent = Math.round(result * 1000) / 1000
  firstNumber = ""
  currentOperator = ""
  shouldResetDisplay = true
})

// Bouton clear
clearBtn.addEventListener("click", () => {
  display.textContent = "0"
  firstNumber = ""
  secondNumber = ""
  currentOperator = ""
  shouldResetDisplay = false
})