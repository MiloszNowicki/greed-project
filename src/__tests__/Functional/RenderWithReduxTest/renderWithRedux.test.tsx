import React from 'react'
import renderWithRedux from "../renderWithRedux";
import {ConnectedCounter} from "../../../Components/Buttons/ConnectedCounter";
import {fireEvent} from 'react-testing-library';


describe('it enbles testing components that connect to store', () => {
    test('it can render with redux defaults', () => {
        const { getByTestId, getByText } = renderWithRedux(<ConnectedCounter />)
        fireEvent.click(getByText('+'))
        expect(getByTestId('count-value').textContent).toBe('1')
    })
})