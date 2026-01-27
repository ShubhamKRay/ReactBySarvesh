import React, { Component } from 'react'

export default class LifeCycleInCBC extends Component {
    state = {count : 0};

    increment = () =>{
        this.setState({count : this.state.count + 1});
    };
    componentDidMount(){
        console.log("component Mounted");

    this.intervalID = setInterval(() => {
        console.log("API Called");
    }, 2000);
}

    componentDidUpdate(){
        console.log("component Updated");
    }


componentWillUnmount(){
    console.log("component Unmounted");
    clearInterval(this.intervalID);
}


  render() {
    console.log("Render");

    return (
    <div>
        <h3>LifeCycleInCBC{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
    </div>
    );
  }
}


//class based component shortcut --->>>> rcc
// class based function component shortcut ---->> rafce