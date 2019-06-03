import GameCellInterface from "./GameCellInterface";

export default interface GameStateInterface {
    isGameOn: boolean
    gameBoard: Array<GameCellInterface>
}