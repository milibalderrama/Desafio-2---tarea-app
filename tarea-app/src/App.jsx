import React, { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTask] = useState(``);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  
  const handleAddTask = () => {
    if (newTasks.trim() !== ``){
      setTasks([...tasks, newTasks]);
      setNewTask(``)
    }
  };

  const handleDeleteTask =(index) => {
    const updatedTasks =[...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);  
  }
  
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     
     
      <div>

        <h1>Lista de los ingresantes</h1>

        <input
          type="text"
          placeholder="Agregar nombre"
          value={newTasks} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddTask}> Agregar nombre</button>
            <ul>
            {tasks.map((task, index)  => (
              <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
              </li>
            ))}
            </ul>
        <ul>
          {tasks.map((task, index) => {

            <div class="card text-white bg-primary mb-3" style="max-width: 20rem;" key={index}>
              <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Encabezamiento</font></font></div>
              <div class="card-body">
                <h4 class="card-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{task}</font></font></h4>
                <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta.</font></font></p>
              </div>
            </div>
          }
          )
          }
        </ul>
      </div> 
      </>
      );
}
export default App
