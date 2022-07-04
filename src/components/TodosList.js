import React, { useState } from "react";
import Todo from "./Todo";

const TodosList = ({ Todos, DeleteFunction, TodoToggle, UpdateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="my-[2rem] w-full flex flex-col justify-center items-center">
      {Todos.map((todo) => (
        <div className="w-[22rem] flex flex-col justify-center items-center bg-slate-300 cursor-pointer mb-3  md:hover:scale-125 transition-all hover:drop-shadow-lg bg-opacity-30 backdrop-blur-sm rounded-lg">
          <Todo
            todo={todo.todo}
            id={todo.id}
            completed={todo.complete}
            DeleteFunction={DeleteFunction}
            TodoToggle={TodoToggle}
            UpdateTodo={UpdateTodo}
          />
          {/* <button>edit</button> */}
        </div>
      ))}
    </div>
  );
};

export default TodosList;
