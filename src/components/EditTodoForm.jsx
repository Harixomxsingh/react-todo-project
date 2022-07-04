import React, { useState } from "react";

const EditTodoForm = ({ UpdateTodo, id, todo, SetIsEditing }) => {
  const [value, setValue] = useState(todo);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     UpdateTodo(id, value);
  //     setValue("");
  //     SetIsEditing(false);
  //   };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        UpdateTodo(id, value);
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
