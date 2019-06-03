import GameCellInterface from "../Model/GameCellInterface";


class GameCell implements GameCellInterface {

    positionX: number;
    positionY: number;
    value: number;

    constructor(positionX: number, positionY: number, value: number) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.value = value;

    }

    getPositionX(): number {
        return this.positionX;
    }

    getPositionY(): number {
        return this.positionY;
    }

    getValue(): number {
        return this.value;
    }
}

export default GameCell