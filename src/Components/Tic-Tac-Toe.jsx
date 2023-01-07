const useState = require("react").useState;
export const TicTacToe  = () => {

const [board, setBoard] = useState(Array(9).fill(null));
const [currentPlayer, setCurrentPlayer] = useState('X');

const handleCellClick = (index) => {
// copy the board
const newBoard = [...board];
// check if the cell is already filled
if (newBoard[index]) {
return;
}

// fill the cell with the current player
newBoard[index] = currentPlayer;
// switch players
setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
// update the board
setBoard(newBoard);

const checkForWinner = () => {
const lines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

for (let i = 0; i < lines.length; i++) {
const [a, b, c] = lines[i];
if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
alert(`Player ${newBoard[a]} wins!`);
handleResetClick();
return;
}
}

if (newBoard.every(cell => cell !== null)) {
alert('It is a tie!');
handleResetClick();
}
}
checkForWinner();
}

const handleResetClick = () => {
setBoard(Array(9).fill(null));
setCurrentPlayer('X');
  }

  return (
<>    
<div id="tic-tac-toe">
<table>
<tbody>
<tr>
<td onClick={() => handleCellClick(0)}>{board[0]}</td>
<td onClick={() => handleCellClick(1)}>{board[1]}</td>
<td onClick={() => handleCellClick(2)}>{board[2]}</td>
</tr>

<tr>
<td onClick={() => handleCellClick(3)}>{board[3]}</td>
<td onClick={() => handleCellClick(4)}>{board[4]}</td>
<td onClick={() => handleCellClick(5)}>{board[5]}</td>
</tr>

<tr>
<td onClick={() => handleCellClick(6)}>{board[6]}</td>
<td onClick={() => handleCellClick(7)}>{board[7]}</td>
<td onClick={() => handleCellClick(8)}>{board[8]}</td>
</tr>
</tbody>
</table>
<button id="reset-button" onClick={handleResetClick}>Reset</button>
</div>

    
</>
)
}
