import createGameCell from "../../../Factory/gameCellFactory";
import createGameState from "../../../Factory/gameStateFactory";

describe('gameStateFacotryTest', ()=> {
    it('creates object that implements correct interface', ()=> {

        const gameCellArray = [createGameCell(0, 1, 2)]
        const expectedGameStateObject = {
            isGameOn: true,
            gameBoard: gameCellArray
        }

        let gameState = createGameState(true, gameCellArray)
        expect(gameState).toEqual(expectedGameStateObject)
        expect(gameState.getIsGameOn()).toEqual(true)
        expect(gameState.getGameBoard()).toEqual(gameCellArray)
    })
})