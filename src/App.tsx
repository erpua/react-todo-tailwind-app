import TodoItem from "./componets/TodoItem"
import { dummyData } from "./data/todos"

function App() {

function setTodoCompleted(id: number, completed: boolean){
  alert(
   `Todo with id ${id} is now ${completed ? "completed" : "not completed"}`
  )
}

  return (
    <>
    <main 
      style={{border: "1px solid red"}} 
      className="py-10 bg-teal-50 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your todo</h1>
      <div 
        style={{border:"1px dotted blue"}}
        className="
        max-w-lg 
        mx-auto 
        p-5
        bg-slate-100
        rounded
        "
        >
          <div 
          style={{border:"1px dotted red"}}
          className="space-y-2 p-3">
            {dummyData.map((todo) => (
             /*  <p 
                key={todo.id}
                className="text-lg"
              >
                {todo.title}
              </p> */
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
