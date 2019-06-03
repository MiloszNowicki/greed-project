import React from 'react'
import { connect } from 'react-redux'
import counterReducer from '../../Redux/Reducer/counterReducer'


export interface Action {
    type: string
}
export interface ICounterProps {
    dispatch(action: Action): void
    count: number
}

class Counter extends React.Component<ICounterProps> {
    constructor(props: ICounterProps) {
        super(props)
    }
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                        <span data-testid="count-value">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

// counter.js
// class Counter extends React.Component<ICounterProps> {
//     constructor(props: ICounterProps) {
//         super(props)
//     }
//     increment = () => {
//         this.props.dispatch({ type: 'INCREMENT' })
//     }
//
//     decrement = () => {
//         this.props.dispatch({ type: 'DECREMENT' })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h2>Counter</h2>
//                 <div>
//                     <button onClick={this.decrement}>-</button>
//                         <span data-testid="count-value">{this.props.count}</span>
//                     <button onClick={this.increment}>+</button>
//                 </div>
//             </div>
//         )
//     }
// }

// normally this would be:
// export default connect(state => ({count: state.count}))(Counter)
// but for this test we'll give it a variable name
// because we're doing this all in one file
