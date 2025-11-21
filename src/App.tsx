import { useState } from "react"
import { dummyData } from "./data/todos"
import TodoItem from "./componets/TodoItem"
import AddTodoform from "./componets/AddTodoForm";

function App() {

  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean){
   // alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`)
    setTodos((prevTodos) => 
      prevTodos.map( (todo) => (todo.id === id ? {...todo, completed} : todo ))
    );
  }

  return (
    <>
      <main 
        style={{border: "1px solid red"}} 
        className="py-10 bg-teal-50 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">Your todo</h1>
        <div style={{border:"1px dotted blue"}} className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
          <AddTodoform/>
          <div style={{border:"1px dotted red"}} className="space-y-2 p-3">
            {todos.map((todo) => (
              <TodoItem 
                key={todo.id}
                todo={todo}
                onCompletedChange={setTodoCompleted}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
