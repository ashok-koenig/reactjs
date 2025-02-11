import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        // Initilize the state
        this.state = {
            count: 0
        }
    }
    handleClick = () =>{
        this.setState({count: this.state.count + 1})
    }

    componentDidMount() {
        console.log("componentDidMount called..");        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            console.log("The count has changed: ", this.state.count)
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called...")
    }

  render() {
    return (
      <div>
        <h1>Current Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
