import { render } from '@testing-library/react';
import React from 'react'

class Counter extends React.Component{
constructor(props) {
  super(props)

  this.state = {
        index:1
  };
}
deCrease(){
    this.setState(
        {index:this.state.index-1}
    );
}
inCrease(){
    this.setState((prevState,props)=>{
        return{            index:prevState.index+1
    }
    }
    
    );
}

render(){
    return(
        <div>
        <p>Gia tri: {this.state.index}</p>
        <button onClick={()=>this.deCrease()}>Tru</button>
        <button onClick={()=>this.inCrease()}>Cong</button>
        </div>
    );
}
}
export default Counter;