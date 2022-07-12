import "./styles.css";

import NavBar from "./components/NavBar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
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
