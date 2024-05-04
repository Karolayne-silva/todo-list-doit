import { useEffect, useState } from "react";
import "./App.css";
import imgAdc from "./img/adc.svg";
import imgDelete from "./img/imgdelete.svg";
import imgCheck from "./img/check.svg";
import Warn from "./componentes/warn";
import Header from "./componentes/header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [showWarn, setShowWarn] = useState(false);

  const storedDarkMode = localStorage.getItem("DARK_MODE") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("DARK_MODE", darkMode);
    }
  }, [darkMode]);

  function handleNewTask(event) {
    if (event.key === "Enter" && input.trim() !== "") {
      if (tasks.length >= 6) {
        setShowWarn(true);
        setTimeout(() => {
          setShowWarn(false);
        }, 5000);
      } else {
        const newTasks = [
          {
            nome: input,
            id: Math.floor(Math.random() * 1000),
            isCompleted: false,
          },
          ...tasks,
        ];
        setTasks(newTasks);
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
      window.localStorage.setItem("tarefa", JSON.stringify(tasks));
    }
  }, [tasks]);

  function handleCheck(id) {
    const newTasks = [...tasks];
    const updatedTasks = newTasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    const completedTaskIndex = updatedTasks.findIndex(
      (task) => task.isCompleted
    );

    if (completedTaskIndex !== -1) {
      const completedTask = updatedTasks.splice(completedTaskIndex, 1)[0];
      updatedTasks.push(completedTask);
    } else {
      const completedTask = updatedTasks.splice(completedTaskIndex, 1)[0];
      updatedTasks.unshift(completedTask);
    }

    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    
    const removedTasks = tasks.filter((task) => task.id !== id);
    console.log(removedTasks);
    if (removedTasks.length === 0) {
      setTasks([])
      localStorage.clear();
    } else {
      setTasks(removedTasks);
    } 
    
  }

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
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

          {tasks.map((task) => (
            <div className="box-task" key={task.id}>
              <div
                className={task.isCompleted ? "checked-true" : "checked-false"}
                onClick={() => handleCheck(task.id)}
              >
                {task.isCompleted && <img src={imgCheck} alt="icone" />}
              </div>
              <p
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "",
                }}
              >
                {task.nome}
              </p>
              <div className="delete" onClick={() => handleDelete(task.id)}>
                <img src={imgDelete} alt="icone"/>
              </div>
            </div>
          ))}
        </div>
        {showWarn && <Warn />}
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
