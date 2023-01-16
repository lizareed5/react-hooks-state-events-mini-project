import React from "react";

function Task({text, category, removeTask}) {

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick = { () => removeTask(text)}>X</button>
    </div>
  );
}

export default Task;
