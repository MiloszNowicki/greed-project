export const INITIALIZE_GAME_BOARD =  "INITIALIZE_GAME_BOARD"
export const START_GAME = "START GAME"
export const STOP_GAME = "STOP_GAME"

interface initializeGameActionInterface {
    type: typeof INITIALIZE_GAME_BOARD
    rows: number,
    columns: number
}


export function initializeGame(rows: number, columns: number): initializeGameActionInterface {
    return {
        type: INITIALIZE_GAME_BOARD,
        rows: rows,
        columns: columns
    }
}

interface startGameActionInterface {
    type: typeof START_GAME
}

export function startGame(): startGameActionInterface{
    return {
        type: START_GAME
    }
}

interface stopGameActionInterface {
    type: typeof STOP_GAME
}

export function stopGame(): stopGameActionInterface {
    return {
        type: STOP_GAME
    }
}

export type GameBoardActionTypes = initializeGameActionInterface
export type GameIsPlayedActionTypes = startGameActionInterface | stopGameActionInterface