// import React from "react";
// class FormComponent extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             title:"",
//             desc:""
//         }
//     }
//     handleUname=(e)=>{
//         this.setState({uname:e.target.value})
//     }
//     handlePwd=(e)=>{
//         this.setState({pwd:e.target.value})
//     }
//     handleLogin=()=>{
//         console.log(this.state.uname,this.state.pwd)
//     }
//     render(){
//         return(
//             <>
//             <h1> login form </h1>
//             Username:<input type='text' onChange={(e)=>this.handleUname(e)}></input>
//             Password:<input type='text'onChange={(e)=>this.handlePwd(e)}></input>
//             <button onClick={()=>this.handleLogin()}>login</button>
//             </>
//         )
//     }
// }
// export default FormComponent