import "./todolist.css";
import React, { useState } from "react";

export default function ToDoList() {
  const [newtask, setNewtask] = useState("");
  const [del, setDel] = useState('');
  const [tasks, setTasks] = useState([
    {
      value: "Learn React",
      time: new Date(),
    },
  ]);

  function handleInput(event) {
    setNewtask({ value: event.target.value, time: new Date() });
  }
  function handleAdd() {
    setDel(true);
    if (newtask == "") {
      window.Error("FUCK MATE");
    } else {
      setTasks((t) => [...t, newtask]);
      setNewtask("");
    }
  }
  function Delete(index) {
    setDel(index);
    setTimeout(() => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      setDel(null);
    }, 200);
  }
  function FormatDate(date) {
    let Hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${Hour} - ${minute} - ${second}`;
  }

  return (
    <div className="Parent">
      <form>
        <input
          type="text"
          placeholder="Enter a task.."
          onChange={handleInput}
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index} className={del === index ? "fade-out" : ""}>
              <p>{task.value}</p>
              <button
                type="button"
                className="delete"
                onClick={() => Delete(index)}
              >
                Delete
              </button>
              <p className="Date">{FormatDate(task.time)}</p>
            </li>
          ))}
        </ol>
      </form>
    </div>
  );
}
