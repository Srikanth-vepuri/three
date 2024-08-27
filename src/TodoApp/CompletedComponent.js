import React from "react";

class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <>
            <h1> Completed Tasks </h1>
             {
                this.props.prop1.map((item)=>(
                    <div>
                        <p>{item.title}</p>
                        <p> {item.desc}</p>
                        <button onClick={()=>this.props.prop2(item.id)}>undonee</button>
                    </div>
                ))
            }
            </>
        )
    }
}
export default CompletedComponent