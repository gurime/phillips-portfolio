const useState = require("react").useState;
export const TicTacToe  = () => {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameOver, setGameOver] = useState(false);
  
    function checkForWin() {
      // Check rows
      for (let i = 0; i < 9; i += 3) {
        if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== "") {
          return board[i];
        }
      }
  
      // Check columns
      for (let i = 0; i < 3; i++) {
        if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== "") {
          return board[i];
        }
      }
  
      // Check diagonals
      if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") {
        return board[0];
      }
      if (board[2] === board[4] && board[2] === board[6] && board[2] !== "") {
        return board[2];
      }
  
      return null;
    }
  
    function checkForTie() {
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          return false;
        }
      }
      return true;
    }
  
    function handleCellClick(index) {
      if (gameOver || board[index] !== "") {
        return;
      }
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  
      const winner = checkForWin();
      if (winner) {
        alert(`Player ${winner} wins!`);
        setGameOver(true);
        return;
      }
      if (checkForTie()) {
        alert("The game is a tie!");
        setGameOver(true);
        return;
      }
    }
  
    function handleResetClick() {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setGameOver(false);
      setCurrentPlayer("X");
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
