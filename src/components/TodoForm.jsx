import React, { useContext, useId, useState } from "react";
import Tilt from "react-parallax-tilt";
import { v4 as uuid } from "uuid";
import { todoContext as TodoContext } from "../context/todos.context";
const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const TodoData = useContext(TodoContext);
  const lid = useId();
  const Fid = uuid();
  const handleSubmit = (e) => {
    e.preventDefault();
    TodoData.SubmitFunction(Fid, inputText, false);
    setInputText("");
  };
  return (
    <Tilt>
      <form
        onSubmit={handleSubmit}
        className=" relative rounded-2xl w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] flex flex-col justify-center items-center bg-slate-300 bg-opacity-30 backdrop:filter backdrop-blur-sm"
      >
        <label htmlFor={lid}>Todo: </label>
        <input
          type="text"
          placeholder="Enter your Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          id={lid}
          autoComplete="off"
          maxLength={20}
          className="focus:outline-none px-[1rem] mb-[1rem] md:px-[3rem] md:py-[1rem] rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 md:px-8 md:py-4 bg-indigo-400 rounded-lg hover:drop-shadow-lg"
        >
          Add
        </button>
      </form>
    </Tilt>
  );
};

export default TodoForm;
