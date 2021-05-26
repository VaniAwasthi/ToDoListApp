import React from "react"
import './App.css';
import Input from "./Component/Input/Input"
import List from "./Component/List/List"

function App() {
  const [tasks, setTasks] = React.useState([]);
  const addTask = (task) => {
    const taskAdd = {
      id: Math.floor(Math.random() * 100 + 1),
      name: task,
      status: 0,
    };

    setTasks([...tasks, taskAdd]);
  };

  return (
    <div className="App">
     <div className="listDiv">
      <Input addTask={addTask} />
      <List
        tasks={tasks}
      />
    </div>
    </div>
  );
}

export default App;
