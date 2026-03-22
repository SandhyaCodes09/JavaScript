const cells = document.querySelectorAll(".cell");
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

// Board state (0-8)
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

function updateStatus(msg) {
  statusEl.textContent = msg;
}

function checkWinner() {
  for (const combo of winCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // highlight winning cells
      cells[a].classList.add("win");
      cells[b].classList.add("win");
      cells[c].classList.add("win");
      return board[a]; // "X" or "O"
    }
  }
  return null;
}

function isDraw() {
  return board.every(cell => cell !== "");
}

function handleClick(e) {
  if (gameOver) return;

  const idx = Number(e.target.dataset.index);

  // If cell already filled, ignore
  if (board[idx] !== "") return;

  // Update board + UI
  board[idx] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.disabled = true;

  // Check winner
  const winner = checkWinner();
  if (winner) {
    gameOver = true;
    updateStatus(`Winner: ${winner} 🎉`);
    // Disable all remaining cells
    cells.forEach(btn => btn.disabled = true);
    return;
  }

  // Check draw
  if (isDraw()) {
    gameOver = true;
    updateStatus("Match Draw 😄");
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus(`Turn: ${currentPlayer}`);
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;

  cells.forEach(cell => {
    cell.textContent = "";
    cell.disabled = false;
    cell.classList.remove("win");
  });

  updateStatus("Turn: X");
}

// Attach events
cells.forEach(cell => cell.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
