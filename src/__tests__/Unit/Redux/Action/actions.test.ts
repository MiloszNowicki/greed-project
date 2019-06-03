import {INITIALIZE_GAME_BOARD, initializeGame} from "../../../../Redux/Action/actions";

describe('test of redux actions', () => {
    it('can fire initialize game board action', ()=> {
            const expectedAction = {
                type: INITIALIZE_GAME_BOARD,
                rows: 3,
                columns: 3

            }
            const actualAction = initializeGame(3,3)

        expect(actualAction).toEqual(expectedAction)
        }

    )
})