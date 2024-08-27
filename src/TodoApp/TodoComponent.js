import React from "react";
import CompletedComponent from "./CompletedComponent";
import PendingComponent from "./PendingComponent";
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return{todos:props.data}
    }
    getCompletedItems=()=>{
        const completedItems = this.state.todos.filter((item)=>item.status===true)
        return completedItems
    }
    getPendingItems=()=>{
        const pendingItems = this.state.todos.filter((item)=>item.status===false)
        return pendingItems
    }
    changeCompletionStatus=(todoId)=>{
        const temp=this.state.todos
       const obj= temp.find((item)=>item.id===todoId)
       obj.status=!obj.status 
       this.setState({todos:temp})   
    }
    render(){
        
        return(
            <>            
           <CompletedComponent prop1={this.getCompletedItems()} prop2={this.changeCompletionStatus}></CompletedComponent>
           <PendingComponent prop1={this.getPendingItems()} prop2={this.changeCompletionStatus}></PendingComponent>
           {/* <button onClick={()=>{this.changeCompletionStatus(1)}}>test</button> */}
            </>
        )
    }
}
export default TodoComponent