import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
};

export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
  const completedTodos = todos.filter(todo => todo.completed);

  return(
    <div className="text-center space-y-2 text-sm font-medium">
      <p>
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button 
          onClick={deleteAllCompleted}
          className="text-red-500 hover:underline hover:bg-gray-300 text-sm font-bold"
        >
          Delete all completed
        </button>
      )}
    </div>
  )
};