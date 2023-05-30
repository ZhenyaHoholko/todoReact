import React from "react";
import Task from "./Task";
import "antd/dist/reset.css";

import { useState } from "react";

const Input = ({ id, title }) => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const mouseClick = () => {
    // console.log(tasks);
    setTasks([...tasks, { id: tasks.length + 1, title: text }]);
    setText("");
  };
  const mouseDelete = (id) => {
    const filterDelete = tasks.filter((item) => item.id !== id);
    setTasks([...filterDelete]);
  };
  const mouseChange = (id, text) => {
    // console.log("mouseChange", id, text);

    const arr = tasks.map((item) =>
      item.id === id ? { ...item, title: text } : item
    );
    setTasks([...arr]);
  };

  return (
    <div>
      <input onChange={(elem) => setText(elem.target.value)} value={text} />
      <button onClick={() => mouseClick()}>Add</button>
      {tasks.map((item) => (
        <Task
          key={item.id}
          item={item}
          mouseDelete={mouseDelete}
          mouseChange={mouseChange}
        />
      ))}
    </div>
  );
};

export default Input;
