import React from "react"
class SimpleState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:"intial"
        }
    }
    ChangeData=()=>{
        console.log("change the data")
        this.setState({data:"final"})
    }
    render=()=>{
        console.log("render")
        return(
            <><h1> states demo </h1>
            <h2>{this.state.data}</h2>
            <button onClick={this.ChangeData}>change</button>
            </>
        )
    }
}
export default SimpleState