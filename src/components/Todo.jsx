import React, { useState, useContext } from "react";
import EditTodoForm from "./EditTodoForm";
import { todoContext as TodoContext } from "../context/todos.context";
const Todo = ({
  todo,
  id,
  completed,
  DeleteFunction,
  TodoToggle,
  UpdateTodo,
}) => {
  const [isEditing, SetIsEditing] = useState(false);
  const TodoData = useContext(TodoContext);
  return (
    <div className="flex justify-between items-center w-[20rem]" key={id}>
      {isEditing ? (
        <EditTodoForm id={id} todo={todo} SetIsEditing={SetIsEditing} />
      ) : (
        <>
          <span
            className={`${completed ? "line-through" : ""}`}
            onClick={() => TodoData.TodoToggle(id)}
            key={Math.random()}
          >
            {todo}
          </span>
          <div>
            <button onClick={() => TodoData.DeleteFunction(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 md:h-8 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <button onClick={() => SetIsEditing(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 md:h-8 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
