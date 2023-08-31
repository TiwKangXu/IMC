import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

// if we want to export component as a class, we need to:
//  - let it extends Component
//  - use generics <type1, type2, ...> so that the types of prevState.count and this.props.message can be inferred
//  - use render() to export the html of class
export class Counter3 extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}