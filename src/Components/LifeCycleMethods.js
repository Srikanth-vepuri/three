import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"initial"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("before",props,state)
    //     // state.msg=props.msg
    //     // console.log("after",props,state)
    //     return{msg:props.msg}
        
    // }
    // componentDidMount(){
    //     // setTimeout(()=>{
    //     //     this.setState({count:this.state.count+1})
    //     // },3000)
    //     this.setState({count:1})
    // }
    shouldComponentUpdate(newProps,newState){
        console.log("inside shouldcomponentupdate")
        console.log(newState.count)
        if(this.state.count===newState.count){
            return false
        }
        else{
            return true
        }
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot")
        return "from snapshot"
    }
    componentDidUpdate(props,state,snapValue){
        console.log("did update",state,snapValue)
    }
    changeCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        {console.log("render")}
        return(
            <>
            <h1>{this.state.count}</h1>
            <h2> {this.state.msg} </h2>
            <button onClick={this.changeCount}>change</button>
            
            </>
        )
    }
}
export default LifeCycleMethods