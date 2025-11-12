import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo; // todo, this name for the prop tha we want to accept from father to child
  onCompletedChange: (id: number, completed: boolean) => void; // void means does not return anything
};

//export default function TodoItem(props: TodoItemProps){
export default function TodoItem({todo, onCompletedChange}: TodoItemProps){
  return(
    <div>
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
        "
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
              : ""}>
            {todo.title}
        </span>
      </label>
    </div>
  )
};