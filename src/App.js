import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import Todos from "./Components/Todos";

function App() {

  // use state
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  //f etching data from local storage
  useEffect(() => {
    getLocalTodos();
  }, []);

  // rendering status filtering & local storage
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // todos filtering function 
  const filterHandler = () => {
    switch (status) {
      case 'completed': setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted': setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      case 'all': setFilterTodos(todos)
        break;
    }
  }

  // setting & getting data from local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = localStorage.getItem("todos");
      setTodos(JSON.parse(localTodos));
    }
  }


  return (
    <div>
      <header>
        <i className="fas fa-user profile"></i>
        Zahid's To-Do List
      </header>


      <Form inputText={inputText} setInputText={setInputText}
        todos={todos} setTodos={setTodos} setStatus={setStatus} />

      <Todos todos={todos} setTodos={setTodos} filterTodos={filterTodos} />

    </div>


  )
}

export default App;
