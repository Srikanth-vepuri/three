import LifeCycleMethods from "./Components/LifeCycleMethods"
import RootComponent from "./Components/RootComponent"
import TodoComponent from "./TodoApp/TodoComponent"
import data from "./TodoApp/datafile"

function App(){
  return(
    <>
    <TodoComponent data={data}></TodoComponent>
    </>
  )
}
export default App