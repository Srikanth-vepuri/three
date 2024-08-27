import React from "react";
class SigninComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("signin")
        return(
            <>
            <h1> please signin </h1>
            <button onClick={this.props.toggleFunc}> login </button>
            </>
        )
    }
}
export default SigninComponent