import React from "react";
class SimpleClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.fname="peter"
    }
    ChangeName=()=>{
        this.fname="john"
        console.log("inside fun", this.fname)
    }
    render(){
        return(
            <>
            <h1> demo </h1><h2> hello{this.fname}</h2>
            <button onClick={this.ChangeName}>change</button>
            </>
        )
    }
}
export default SimpleClassComponent