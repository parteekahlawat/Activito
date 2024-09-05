"use client"
import { useState } from 'react';
import "./styles.css"
import { Button } from "@/components/ui/button";
import Link from 'next/link';
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const handleClick = (index:any) => {
    // If the square is already filled or there is a winner, return early
    if (board[index] || winner) return;

    // Create a new copy of the board with the clicked square filled
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';

    // Update the board and toggle the player turn
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index:any) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
      <Link href="/">
        Home
      </Link>
    </div>
  );
};

// Function to determine the winner
function calculateWinner(squares:any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
