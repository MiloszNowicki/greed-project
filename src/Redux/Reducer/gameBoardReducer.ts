import GameCellInterface from "../../Model/GameCellInterface";
import {GameBoardActionTypes, INITIALIZE_GAME_BOARD} from "../Action/actions";
import {prepareGameCells} from '../State/prepareState'

export interface gameBoardState {
    gameBoard: GameCellInterface[][]
}

const initialState: gameBoardState = {
    gameBoard: []
}

export default function gameBoardReducer(state = initialState, action: GameBoardActionTypes): GameCellInterface[][] {
    switch(action.type) {
        case INITIALIZE_GAME_BOARD:
            return { ...state, gameBoard: prepareGameCells(action.rows, action.columns) }
        default:
            return state
    }
}