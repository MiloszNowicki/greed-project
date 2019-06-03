import GameStateInterface from "../../Model/GameStateInterface";
import createGameState from "../../Factory/gameStateFactory";
import GameCellInterface from "../../Model/GameCellInterface";
import createGameCell from "../../Factory/gameCellFactory";


export function prepareGameCells(rows: number, columns: number): GameCellInterface[][] {
    let gameCells: GameCellInterface[][] = []
    for(let row = 0; row < rows; row++) {
        let gameCellRow: GameCellInterface[] = []
        for(let column = 0; column < columns; column++) {
                gameCellRow.push(
                    createGameCell(row, column,(Math.random() * 9) + 1)
                )
            }
        gameCells.push(gameCellRow)
    }
    return gameCells
}

export default function prepareState(rows: number, columns: number): GameStateInterface {
    return createGameState(false, prepareGameCells(rows, columns))
}