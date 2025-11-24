import { useState } from "react";
import { dummyData } from "./data/todos";
// import TodoItem from "./componets/TodoItem";
import AddTodoform from "./componets/AddTodoForm";
import TodoList from "./componets/TodoList";

export default function App() {

  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean){
   // alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`)
    setTodos((previousTodos) => 
      previousTodos.map((todo) => (
        todo.id === id 
          ? {...todo, completed} 
          : todo 
        ))
    );
  };

  function addTodo(title: string){
    setTodos(previousTodos => [
      {
        id:previousTodos.length + 1,
        title, // title: title,
        completed: false
      },
      ...previousTodos
    ])
  };

  function deleteTodo (id: number) {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id ));
  };

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
      </main>
    </>
  )
};