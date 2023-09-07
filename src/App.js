import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "STC", content: "Do STC Tasks!" },
      {
        id: 2,
        title: "Study",
        content: "Complete Study React & Redux Course!",
      },
      { id: 3, title: "Movie", content: "Watch a Night Movie!" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: todos });
  };

  addTodo = (todo) => {
    let id = this.state.todos.length;
    todo.id = ++id;
    const newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="container">
      <BrowserRouter>
      <Navbar />
      <Routes>
       <Route index element={<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />} />
       <Route path="/addTodo" element={ <AddTodo addTodo={this.addTodo} />} />
      </Routes>
      </BrowserRouter>        
      </div>
    );
  }
}

export default App;
