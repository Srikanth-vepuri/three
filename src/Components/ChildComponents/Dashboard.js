import React from "react";
import RootComponent from "../RootComponent";
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
          const {username,role} = this.props.userdata
          console.log(username,role)
        return(
            <>
            <h1> Welcome {username} </h1>
            <h2> Role:{role} </h2>
            <button onClick={this.props.toggleFunc}> logout </button>
            </>
        )
    }
}
export default Dashboard