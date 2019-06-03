import {GameIsPlayedActionTypes, START_GAME, STOP_GAME} from "../Action/actions";

interface GameIsPlayedInterface {
    isGameOn: boolean
}

const initialState: GameIsPlayedInterface = {
    isGameOn: false
}

export default function gameIsPlayedReducer(state = initialState, action: GameIsPlayedActionTypes): GameIsPlayedInterface {
    switch(action.type) {
        case START_GAME: {
            return {
                ...state,
                isGameOn: true
            }
        }

        case STOP_GAME: {
            return {
                ...state,
                isGameOn: false
            }
        }
        default:
            return state
    }
}