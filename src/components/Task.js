import React from "react";
import { useState } from "react";

const Task = ({ item, mouseDelete, mouseChange }) => {
  const [isChange, setIsChange] = useState(false);
  const [text, setText] = useState(item.title);

  const choice = () => {
    if (isChange) {
      mouseChange(item.id, text);
      setIsChange(!isChange);
    } else {
      setIsChange(!isChange);
    }
  };
  return (
    <div key={item.id}>
      {isChange ? (
        <input onChange={(e) => setText(e.target.value)} value={text} />
      ) : (
        <p>{item.title}</p>
      )}
      <button onClick={() => mouseDelete(item.id)}>Delete</button>
      <button onClick={() => choice()}>{isChange ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Task;
