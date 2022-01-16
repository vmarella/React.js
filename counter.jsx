import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        counter: 1,
        ImageURL: 'https://picsum.photos/200'
     }; // state is an object in react that includes any data that teh object needs

    render() { 
        return (
                <React.Fragment>
                    <span class="badge badge-primary m-2">{this.state.count}</span> 
                    <button>Increment</button>
                    <span class="badge badge-primary m-1">{this.formatCount()}</span> 
                    <button onClick ="Increment();">Increment</button>
                    <span><img src={this.state.ImageURL}></img></span> 

                </React.Fragment>
                
                ); // inside the curly brackets you can add anything 
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    } 
    Increment() {
        const { count } = this.state;
        count++;
        return count;
    }
}
 


export default Counter;