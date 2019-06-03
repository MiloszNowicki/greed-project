import React from 'react'
import {createStore} from "redux";
import rootReducer from "../../Redux/Reducer/rootReducer";
import {Provider} from "react";
import {render} from "react-testing-library";

export default function renderWithRedux(
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState)
    } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>), store,
    }
}