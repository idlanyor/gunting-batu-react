/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = isXNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setIsXNext(!isXNext);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Pemenang: ' + winner;
  } else {
    status = 'Giliran: ' + (isXNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
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
  );
}

function calculateWinner(squares) {
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <Board />
      </header>
    </div>
  );
}

export default App;

// import  { useState } from 'react';
// import './App.css';

// function App() {
//   const [gameStarted, setGameStarted] = useState(false);

//   const startGame = () => {
//     setGameStarted(true);
//   };

//   return (
//     <div className='flex justify-center items-center flex-col'>
//       {!gameStarted ? (
//         <>
//           <div className="game-container rounded-lg bg-white shadow-lg z-10 p-5 antialiased">
//             <header className='my-4 text-center'>
//               <p className='text-lg'>Selamat datang</p>
//               <p className='font-bold text-3xl' style={{ fontFamily: "Honk" }}>Idlanyor&apos;s Game</p>
//             </header>
//             <main className='text-center'>
//               <button 
//                 style={{ fontFamily: "Jaro" }} 
//                 className='text-2xl rounded-lg bg-gradient-to-t from-blue-300 via-green-400 to-yellow-300 text-blue-700 px-5 py-2'
//                 onClick={startGame}
//               >
//                 Klik untuk mulai
//               </button>
//             </main>
//           </div>
//         </>
//       ) : (
//         <div className='game-play-container'>
//           {/* Add game play UI here */}
//           <h2 className='text-2xl font-bold'>Game is Starting...</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
