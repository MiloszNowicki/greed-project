import React from 'react'
import 'jest-dom/extend-expect'
import App from '../../App';
import {render} from 'react-testing-library'

describe('example app functional test with react testing library', () => {
    test('some app html should be rendered', () => {
        const { container, getByText } = render(<App />)
        const greetingHeading = container.querySelector('h1');
        expect(greetingHeading).toHaveTextContent('fuck off')
    })
})

