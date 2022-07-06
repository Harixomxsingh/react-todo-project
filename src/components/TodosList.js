import React, { useState, useContext } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { todoContext as TodoContext } from "../context/todos.context";
const TodosList = ({ Todos, DeleteFunction, TodoToggle, UpdateTodo }) => {
  // const [isEdit, setIsEdit] = useState(false);
  const TodoData = useContext(TodoContext);
  const key = uuid();
  return (
    <div className="my-[2rem] w-full flex flex-col justify-center items-center">
      {TodoData.Todos.map((todo) => (
        <div className="w-[22rem] flex flex-col justify-center items-center bg-slate-300 cursor-pointer mb-3  md:hover:scale-125 transition-all relative hover:drop-shadow-lg bg-opacity-30 backdrop-blur-sm rounded-lg">
          <Todo
            todo={todo.todo}
            id={todo.id}
            completed={todo.complete}
            UpdateTodo={UpdateTodo}
            key={key}
          />
          {/* <button>edit</button> */}
        </div>
      ))}
    </div>
  );
};

export default TodosList;
