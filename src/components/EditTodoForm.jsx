import React, { useState, useContext } from "react";
import { todoContext as TodoContext } from "../context/todos.context";

const EditTodoForm = ({ id, todo, SetIsEditing }) => {
  const [value, setValue] = useState(todo);
  const TodoData = useContext(TodoContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        TodoData.UpdateTodo(id, value);
        setValue("");
        SetIsEditing(false);
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[20rem] text-center focus:outline-none rounded-lg"
      />
    </form>
  );
};

export default EditTodoForm;
