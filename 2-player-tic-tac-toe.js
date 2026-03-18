// Game variables
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

// Elements
const infoDisplay = document.getElementById("info");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll("#board button");

// Winning combinations
const winningConditions = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// Initialize message
infoDisplay.textContent = `Player ${currentPlayer}'s turn`;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => buttonClick(index));
});

// Handle button click
function buttonClick(index) {
  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  buttons[index].textContent = currentPlayer;

  if (checkWin()) {
    resultDisplay.textContent = `Player ${currentPlayer} wins!`;
    isGameActive = false;
    disableButtons();
    return;
  }

  if (checkTie()) {
    resultDisplay.textContent = "It's a draw!";
    isGameActive = false;
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  infoDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Check win
function checkWin() {
  return winningConditions.some(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

// Check tie
function checkTie() {
  return board.every(cell => cell !== "");
}

// Disable buttons
function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

// use 🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟🚟
