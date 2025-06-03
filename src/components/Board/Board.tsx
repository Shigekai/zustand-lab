import { create } from "zustand";
import { Square } from "../Square/Square";
import { combine } from "zustand/middleware";
import "./board.css"

type SquareValue = "X" | "O" | null;
type BoardState = SquareValue[];
type Player = "X" | "O";

const INITIAL_SQUARES: BoardState = Array(9).fill(null);

const useGameStore = create(
    combine({ squares: INITIAL_SQUARES, currentPlayer: "X" as Player }, (set, get) => {
        return {
            setSquares: (nextSquares: BoardState) => {
                set({ squares: nextSquares });
            },
            updateSquares: (updater: (prev: BoardState) => BoardState) => {
                set((state) => ({ squares: updater(state.squares) }));
            },
            handleClick: (index: number) => {
                const { squares, currentPlayer } = get();

                if (squares[index] !== null) return;

                const newSquares = [...squares];
                newSquares[index] = currentPlayer;

                const nextPlayer = currentPlayer === "X" ? "O" : "X";

                set({
                    squares: newSquares,
                    currentPlayer: nextPlayer,
                });
            },
            resetGame: () => {
                set({
                    squares: INITIAL_SQUARES,
                    currentPlayer: "X",
                });
            },
        };
    }),
);

export default function Board() {
    const squares = useGameStore((state) => state.squares);
    const handleClick = useGameStore((state) => state.handleClick);
    const currentPlayer = useGameStore((state) => state.currentPlayer);
    const resetGame = useGameStore((state) => state.resetGame);

    return (
        <div className="boardContainer">
            <div>
                <h1>Tic Tac Toe</h1>
                <p>Próximo Jogador: {currentPlayer}</p>
                <button onClick={resetGame}>Reset Game</button>
            </div>
            <div className="board">
                {squares.map((square, squareIndex) => (
                    <Square
                        onSquareClick={() => handleClick(squareIndex)}
                        key={squareIndex}
                        value={square}
                    />
                ))}
            </div>
        </div>
    );
}
