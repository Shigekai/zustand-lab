import { create } from "zustand";
import { Square } from "../Square/Square";
import { combine } from "zustand/middleware";

type SquareValue = "X" | "O" | null;
type BoardState = SquareValue[];

const INITIAL_SQUARES: BoardState = Array(9).fill(null);

const useGameStore = create(
    combine({ squares: INITIAL_SQUARES }, (set) => {
        return {
            setSquares: (nextSquares: BoardState) => {
                set({ squares: nextSquares });
            },
            updateSquares: (updater: (prev: BoardState) => BoardState) => {
                set((state) => ({ squares: updater(state.squares) }));
            },
        };
    }),
);

export default function Board() {
    const squares = useGameStore((state) => state.squares);
    const setSquares = useGameStore((state) => state.setSquares);

    return (
        <div className="board">
            {squares.map((square, squareIndex) => (
                <Square key={squareIndex} value={square} />
            ))}
        </div>
    );
}
