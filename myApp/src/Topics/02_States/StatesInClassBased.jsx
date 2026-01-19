import { Component } from "react";

class StatesInClassBased extends Component{

    constructor(){
        super();
        this.state = { text: "Hello Class Based Component"};
    }


    btnHandle = () => {
        this.setState({ text: "Hiiiii"});
    };

    render(){

        console.log(this);

        return (
            <div>
                <h1>Learn States in Class Based Component</h1>
                <h2>{this.state.text}</h2>
                <button onClick={this.btnHandle}>Update</button>
            </div>
        );
    }
}


export default StatesInClassBased;