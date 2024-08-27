import React from "react";

class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <>
            <h1> Pending Tasks </h1>
             {
                this.props.prop1.map((item)=>(
                    <div>
                        <p>{item.title}</p>
                        <p> {item.desc}</p>
                        <button onClick={()=>this.props.prop2(item.id)}>done</button>
                    </div>
                ))
            }
            </>
        )
    }
}
export default PendingComponent