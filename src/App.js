import { useEffect, useState } from "react";
import "./App.css";
import BoxTask from "./componentes/BoxTasks";
import imgAdc from "./img/adc.svg";
import imgLogo from "./img/logo.svg";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [limit, setLimit] = useState(false);

  function handleNewTask(event) {
    if (event.key === "Enter" && input.trim() !== "") {
      if (tasks.length >= 5) {
        alert("limite de tarefas atingido");
        setLimit(true);
      } else {
        setTasks([...tasks, input]);
        setInput("");
      }
    }
  }

  useEffect(() => {
    const storedTasks = window.localStorage.getItem("tarefa");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      const updatedTasks = tasks.slice(0, 5);
      window.localStorage.setItem("tarefa", JSON.stringify(updatedTasks));
    }
  }, [tasks]);

  return (
    <div className="App">
      <div className="header">
        <img src={imgLogo} />
      </div>
      <div className="main">
        <div className="container">
          <div className="bg-title">
            <h1>todo list</h1>
          </div>
          <div className="div-input">
            <img src={imgAdc} alt="icone" />
            <input
              className="input-task"
              type="text"
              value={input}
              placeholder="create a new todo"
              onKeyPress={handleNewTask}
              onChange={({ target }) => {
                setInput(target.value);
              }}
            />
          </div>
          
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <BoxTask
                  nome={task}
                  index={index}
                  setTasks={setTasks}
                  tasks={tasks}
                />
              </li>
            ))}
          </ul>
        </div>
        {limit && <p className="warn">Limite de tarefas por dia atingido!</p>}
      </div>

      <div className="footer">
        <p>
          made by{" "}
          <a href="https://www.linkedin.com/in/karolayne-silvas/">
            Karolayne Silva
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
