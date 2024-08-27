import React from "react";
import Dashboard from "./ChildComponents/Dashboard";
import SigninComponent from "./ChildComponents/SigninComponent";
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogged:true,
            user:{
                username:"srikanth",
                role:"Assistant-LocoPilot"
            }
        }
    }
    /*login=()=>{
        console.log("inside login")
        this.setState({isLogged:true})
    }
    logout=()=>{
        console.log("inside logout")
        this.setState({isLogged:false})
    }*/ toggleUser=()=>{
        this.setState({isLogged:!(this.state.isLogged)})
    }
    render(){
        console.log("render")
        return(
            <>
            {
                this.state.isLogged?
                <>
                <Dashboard userdata={this.state.user} toggleFunc={this.toggleUser}></Dashboard>
                </> : <>
                <SigninComponent toggleFunc={this.toggleUser}></SigninComponent>
                </>
            }
            </>
        )
    }
}
export default RootComponent