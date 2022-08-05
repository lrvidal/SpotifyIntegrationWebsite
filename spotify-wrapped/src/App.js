import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import './App.css';
import robot from './robot.webp';
import NavBar from './NavBar';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';
import { Chart } from "react-google-charts";
const { v4: uuidv4 } = require('uuid');


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    console.log(name);
    todoNameRef.current.value = null;
  }

  function handleClearCopmlete(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  const options = {
    // region: "002", // Africa
    colorAxis: { colors: ["#acd7bd", "#1DB954"] },
    backgroundColor: "black",
    datalessRegionColor: "#D9D7D6",
    defaultColor: "white",
  };

  const data = [
    ["Country", "Latitude"],
    ["Algeria", 36],
    ["Angola", -8],
    ["Benin", 6],
    ["Botswana", -24],
    ["Burkina Faso", 12],
    ["Burundi", -3],
    ["Cameroon", 3],
    ["Canary Islands", 28],
    ["Cape Verde", 15],
    ["Central African Republic", 4],
    ["Ceuta", 35],
    ["Chad", 12],
    ["Comoros", -12],
    ["Cote d'Ivoire", 6],
    ["Democratic Republic of the Congo", -3],
    ["Djibouti", 12],
    ["Egypt", 26],
    ["Equatorial Guinea", 3],
    ["Eritrea", 15],
    ["Ethiopia", 9],
    ["Gabon", 0],
    ["Gambia", 13],
    ["Ghana", 5],
    ["Guinea", 10],
    ["Guinea-Bissau", 12],
    ["Kenya", -1],
    ["Lesotho", -29],
    ["Liberia", 6],
    ["Libya", 32],
    ["Madagascar", null],
    ["Madeira", 33],
    ["Malawi", -14],
    ["Mali", 12],
    ["Mauritania", 18],
    ["Mauritius", -20],
    ["Mayotte", -13],
    ["Melilla", 35],
    ["Morocco", 32],
    ["Mozambique", -25],
    ["Namibia", -22],
    ["Niger", 14],
    ["Nigeria", 8],
    ["Republic of the Congo", -1],
    ["Réunion", -21],
    ["Rwanda", -2],
    ["Saint Helena", -16],
    ["São Tomé and Principe", 0],
    ["Senegal", 15],
    ["Seychelles", -5],
    ["Sierra Leone", 8],
    ["Somalia", 2],
    ["Sudan", 15],
    ["South Africa", -30],
    ["South Sudan", 5],
    ["Swaziland", -26],
    ["Tanzania", -6],
    ["Togo", 6],
    ["Tunisia", 34],
    ["Uganda", 1],
    ["Western Sahara", 25],
    ["Zambia", -15],
    ["Zimbabwe", -18],
  ];


  return (

    <div>
      <NavBar> </NavBar>
      <h1 className='title'> Bebop the Bebot Website</h1>
      <LoginForm></LoginForm>

      <LoginButton></LoginButton>
      

      <div class="container">
        <div class="map">Alternative content</div>
    </div>

    



      <ToDoList todos={todos} toggleTodo={toggleTodo} />

      <Chart
        chartType='GeoChart'
        width= "100%"
        height="400px"
        options={options}
        data = {data}
        legendToggle
      />

      <body className='centerElement'>
        <input ref={todoNameRef} type='text' />
        <button onClick={handleAddTodo}> Add ToDo</button>
        <button onClick={handleClearCopmlete}> Clear Complete</button>
        <div className='centerElement'> {todos.filter(todo => !todo.complete).length} left to do</div>
        <img alt="robot" className="robot" src={robot} />
      </body>
    </div>

  )
}

export default App;
