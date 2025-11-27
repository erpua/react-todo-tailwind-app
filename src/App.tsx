import AddTodoform from "./componets/AddTodoForm";
import TodoList from "./componets/TodoList";
import TodoSummary from "./componets/TodoSummary";
import useTodos from "./hooks/useTodos";

export default function App() {

 const {
  todos,
  addTodo,
  setTodoCompleted,
  deleteTodo,
  deleteAllCompletedTodos
 } = useTodos();

  return (
    <>
      <main 
       // style={{border: "1px solid red"}} 
        className="py-10 bg-teal-50 h-screen space-y-5 border border-blue-700 rounded-md m-1 overflow-y-auto">
        <h1 className="font-bold text-3xl text-center">Your todo</h1>
        <div style={{border:"1px dotted blue"}} className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
          <AddTodoform onSubmit={addTodo}/>
          <TodoList 
            todos={todos}
            onCompletedChange={setTodoCompleted}
            onDelete={deleteTodo}
          />
        </div>
        <TodoSummary 
          todos={todos}
          deleteAllCompleted={deleteAllCompletedTodos}
        />
      </main>
    </>
  )
};