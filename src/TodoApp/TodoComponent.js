import React from "react";
import CompletedComponent from "./CompletedComponent";
import PendingComponent from "./PendingComponent";
//import './App.css'; // Import the CSS file

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            count:0,
            title:"",
            desc:""
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     return { todos: props.data };
    // }
    handleUname=(e)=>{
        this.setState({title:e.target.value})
    }
    handlePwd=(e)=>{
        this.setState({desc:e.target.value})
    }

    getCompletedItems = () => {
        return this.state.todos.filter(item => item.status === true);
    }

    getPendingItems = () => {
        return this.state.todos.filter(item => item.status === false);
    }

    changeCompletionStatus = (todoId) => {
        const temp = this.state.todos;
        const obj = temp.find(item => item.id === todoId);
        obj.status = !obj.status;
        this.setState({ todos: temp });
    }
    addTodo=()=>{
        const newItem = {
            id: 4,
            title:this.state.title,
            desc:this.state.desc,
            status:false,
            active:true
        }
        const temp=[...this.state.todos,newItem]
        this.setState({todos:temp})
    }

    render() {
        return (
            <>
            <h1> Todo </h1>
            Title:<input type='text' onChange={(e)=>this.handleUname(e)}></input>
            Description:<input type='text'onChange={(e)=>this.handlePwd(e)}></input>
            <button onClick={()=>this.addTodo()}>add todo</button>
            <PendingComponent 
                    prop1={this.getPendingItems()} 
                    prop2={this.changeCompletionStatus}
                />
                <CompletedComponent 
                    prop1={this.getCompletedItems()} 
                    prop2={this.changeCompletionStatus}
                />
            </>
        );
    }
}

export default TodoComponent;
