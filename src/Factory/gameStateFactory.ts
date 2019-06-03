import GameCellInterface from "../Model/GameCellInterface";
import GameState from "../ValueObject/GameState";

function createGameState(isGameOn: boolean, gameBoard: GameCellInterface[]) {
    return new GameState(isGameOn, gameBoard)
}

export default createGameState
