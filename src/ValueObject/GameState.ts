import GameStateInterface from "../Model/GameStateInterface";
import GameCellInterface from "../Model/GameCellInterface";


class GameState implements GameStateInterface {
    isGameOn: boolean
    gameBoard: GameCellInterface[]

    constructor(isGameOn: boolean, gameBoard: GameCellInterface[]) {
        this.isGameOn = isGameOn;
        this.gameBoard = gameBoard;
    }

    getIsGameOn(): boolean {
        return this.isGameOn
    }

    getGameBoard(): GameCellInterface[] {
        return  this.gameBoard
    }
}

export default GameState