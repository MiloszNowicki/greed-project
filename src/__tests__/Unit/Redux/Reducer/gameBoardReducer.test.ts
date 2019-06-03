import gameBoardReducer from "../../../../Redux/Reducer/gameBoardReducer";
import { prepareGameCells} from "../../../../Redux/State/prepareState";
import {initializeGame} from "../../../../Redux/Action/actions";

describe('Game board reducer test', () => {
    it('should return previous state when provided with unrecognized action', () => {

        const defaultState = {
            gameBoard: []
        }
        const unrecognizedAction = {}
        expect(gameBoardReducer(defaultState, unrecognizedAction)).toEqual(defaultState)
    })

    it('should return game board with data ready to be played', () => {
        const defaultState = {
            gameBoard: []
        }

        const mockMath = Object.create(global.Math)
        const mockedRandomNumber = 2
        const expectedRandomNumber = mockedRandomNumber*9+1
        mockMath.random =  jest.fn( () => mockedRandomNumber)
        global.Math = mockMath

        const expectedState = {
            gameBoard:prepareGameCells(3, 3)
        }

        const initializeGameAction = initializeGame(3, 3)

        expect(gameBoardReducer(defaultState, initializeGameAction)).toEqual(expectedState)
    })
})