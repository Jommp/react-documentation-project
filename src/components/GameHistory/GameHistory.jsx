export const GameHistory = ({ history }) => {
  const jumpTo = (move) => {

  }

  const moves = history.map((squares, move) => {
    let description;

    description = move ? 
      "Go to move #" + move : 
      "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return moves;
}