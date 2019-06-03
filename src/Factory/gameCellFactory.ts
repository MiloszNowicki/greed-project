import GameCell from "../ValueObject/GameCell";

function createGameCell(positionX: number, positionY: number, value: number): GameCell {
    return new GameCell(positionX, positionY, value);
}

export default createGameCell