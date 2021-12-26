import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
// import Footer from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
// importing useState and useEffect to update todos (in state hook website)
import React, { useState, useEffect } from 'react';
// importing react router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // if there is no todo and to initialize the todo to the local storage so that to save the status
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //the function to delete the todo
  const onDelete = (todo) => {
    // console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e) => {     //here e is just a variable you can set any variqble like a,b,c, etc
      return e !== todo;
    }));
    // to save todos status(added or deleted) even after refreshing
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // the function to add todo
  const addTodo = (title, desc) => {
    // console.log("I am add todo", title, desc);

    // here the serial nos are updated
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // here titles and descriptions are updated
    setTodos([...todos, myTodo]);
    // console.log(myTodo);

  }

  // here setState is useed to update todos {in state hook website}
  const [todos, setTodos] = useState(initTodo);

  // to save todos status(added or deleted) even after refreshing as well as saving immediately
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // everything which will be there in the app in correct order
  return (
    <>
      <Router>
        <Header title="To-Do's List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
