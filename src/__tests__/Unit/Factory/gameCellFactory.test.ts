import createGameCell from "../../../Factory/gameCellFactory";

describe('gameCellFactory test', () => {
    it('creates object that implements correct interface', ()=> {
        const expectedGameCellObject = {
            positionX: 0,
            positionY: 7,
            value: 4
        }

        let actualGameCellObject = createGameCell(0, 7, 4)

        expect(actualGameCellObject).toEqual(expectedGameCellObject);
        expect(actualGameCellObject.getPositionX()).toBe(0)
        expect(actualGameCellObject.getPositionY()).toBe(7)
        expect(actualGameCellObject.getValue()).toBe(4)
    })
})