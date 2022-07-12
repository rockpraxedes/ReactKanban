import "./styles.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "sem função"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTask((existingTask) => {
      return [...existingTask, newTask];
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList title={"Waiting"} />
        <TaskList title="Doing" />
        <TaskList title="Complete" />
      </div>
    </div>
  );
}
