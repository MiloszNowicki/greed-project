import gameIsPlayedReducer from "../../../../Redux/Reducer/gameIsPlayedReducer";
import {startGame, stopGame} from "../../../../Redux/Action/actions";

describe('tests for checking if game goes to on/off state corresponding to proper actions', () => {
    it('returns initial state when provided with unindentified action', () => {
        const defaultState = {
            isGameOn: false
        }
        const unrecognizedAction = {}
        expect(gameIsPlayedReducer(defaultState, unrecognizedAction)).toEqual(defaultState)
    })

    it('sets isGameOn flag to true when provided with proper action', () => {
        const defaultState = {
            isGameOn: false
        }

        const expectedState = {
            isGameOn: true
        }
        const gameStartAction = startGame();

        expect(gameIsPlayedReducer(defaultState, gameStartAction)).toEqual(expectedState)
    })

    it('sets isGameOn flag to false when provided with proper action', () => {
        const defaultState = {
            isGameOn: true
        }

        const expectedState = {
            isGameOn: false
        }
        const gameStopAction = stopGame();

        expect(gameIsPlayedReducer(defaultState, gameStopAction)).toEqual(expectedState)
    })
})