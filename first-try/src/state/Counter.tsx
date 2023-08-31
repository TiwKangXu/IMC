// useReducer hook

import { useReducer } from "react";

type CounterAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type CounterState = {
    count: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }

        case 'decrement':
            return { count: state.count - action.payload }

        default:
            return state
    }
}

export const Counter = () => {
    // "dispatch" is the setter function name to dispatch (control) the value of state
    // what useReducer does are:
    //   - assigning the value of "initialState" as the initial value of "state"
    //   - telling the setter function "dispatch" to dispatch the state using "reducer" 
    //   - passing in the initialState argument to the parameter state in reducer
    //   - linking the two arguments (reducer & initialState) together. i.e. bcuz initial state is a dictionary with
    //      a key "count" in type number, the return type of reducer should also be a dictionary with a key "count"
    //      in type number
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
        </>
    )
}