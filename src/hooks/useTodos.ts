import { useEffect, useState } from "react";
import { dummyData } from "../data/todos";
import type { Todo } from "../types/todo";

export default function useTodos(){
   // const [todos, setTodos] = useState(dummyData);

  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0
      ? savedTodos
      : dummyData
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

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
       // id:previousTodos.length + 1, /* deletes wrong todo when we are repeating same id */ 
        id: Date.now(),
        title, // title: title,
        completed: false
      },
      ...previousTodos
      
    ])
  };

  function deleteTodo (id: number) {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id ));
  };

  function deleteAllCompletedTodos () {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos
  };

};