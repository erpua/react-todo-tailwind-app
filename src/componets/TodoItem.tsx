import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo; // todo, this name for the prop tha we want to accept from father to child
  onCompletedChange: (id: number, completed: boolean) => void; // void means does not return anything
  onDelete: (id: number) => void;
};

//export default function TodoItem(props: TodoItemProps){
export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps){
  return(
    <div className="flex items-center gap-1">
      <label 
        className="
        flex 
        items-center 
        gap-2
        border 
        rounded-md 
        p-2 
        border-gray-400 
        bg-white 
        hover:bg-slate-50 
        grow"
      >
        <input 
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}// this is call back function to pass state changing information from child to parent component
        />
        <span 
          className={ 
            todo.completed 
              ? "line-through text-gray-400" 
              : ""}
        >
            {todo.title}
        </span>
      </label>

      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500 hover:text-red-500"/>
      </button>
    </div>
  )
};