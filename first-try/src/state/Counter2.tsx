// useReducer hook 2

import { useReducer } from "react"

type CounterState = {
    count: number
}

type CounterAction = UpdateCount | ResetCount

type UpdateCount = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetCount = {
    type: 'reset'
}

const initialCount = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialCount
        default:
            return state
    }
}

export const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, initialCount)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </>
    )
}