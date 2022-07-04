import React, { useState } from "react";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodosList from "../components/TodosList";

const Mainpage = () => {
  const initialTodo = [
    { id: 1, todo: "cook bread", complete: false },
    {
      id: 2,
      todo: "reading",
      complete: true,
    },

    {
      id: 3,
      todo: "give water to plant",
      complete: false,
    },
    {
      id: 4,
      todo: "make a project",
      complete: true,
    },
  ];
  const [Todos, SetTodos] = useState(initialTodo);
  const SubmitFunction = (id, todo, complete) => {
    SetTodos((prevTodos) => [...prevTodos, { id, todo, complete }]);
  };
  const DeleteFunction = (todoId) => {
    // take the todo and filter out the todo
    const updateTodo = Todos.filter((todo) => todo.id !== todoId);
    // then set the todo
    SetTodos(updateTodo);
  };
  const TodoToggle = (todoId) => {
    const updateTodo = Todos.map((todo) =>
      todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
    );
    SetTodos(updateTodo);
  };
  const UpdateTodo = (todoId, newTask) => {
    const updateTodo = Todos.map((todo) =>
      todo.id === todoId ? { ...todo, todo: newTask } : todo
    );
    SetTodos(updateTodo);
  };
  return (
    <div className="w-full min-h-screen flex flex-col  bg-gradient-to-br to-yellow-300 from-green-500">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <TodoForm SubmitFunction={SubmitFunction} />
      </div>
      <TodosList
        Todos={Todos}
        DeleteFunction={DeleteFunction}
        TodoToggle={TodoToggle}
        UpdateTodo={UpdateTodo}
      />
    </div>
  );
};

// - Mainpage
//     - header
//     - todoform
//     - todolistcomponents
//         - todolist

export default Mainpage;
