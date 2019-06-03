import prepareState from "../../../../Redux/State/prepareState";

describe('it creates initial game state', () => {
    it('returns state ready for game to be started', () => {

        let actualState = prepareState(10, 12)
        expect(actualState.getIsGameOn()).toBe(false)
    })

    it('test if gameBoard field contains objects with correct coresponding to placing values', () => {

        const mockMath = Object.create(global.Math)
        const mockedRandomNumber = 2
        const expectedRandomNumber = mockedRandomNumber*9+1
        mockMath.random =  jest.fn( () => mockedRandomNumber)
        global.Math = mockMath

        let actualState = prepareState(10, 12)
        let actualGameBoard = actualState.getGameBoard()

        actualGameBoard.forEach((row, rowIndex) => {
            row.forEach((gameCell, columnIndex) => {
                expect(gameCell.getPositionX()).toEqual(rowIndex)
                expect(gameCell.getPositionY()).toEqual(columnIndex)
                expect(gameCell.getValue()).toEqual(expectedRandomNumber)
            })
        })
    })
})
