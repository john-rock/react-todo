import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5&completed=false"
      )
      .then((res) => this.setState({ todos: res.data, loading: false }));
  }

  // Toggle todo complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete todo
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  // Add todo
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <AddTodo addTodo={this.addTodo} />
                  {this.state.todos.length ? (
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  ) : (
                    <>
                      <h1 style={{ marginTop: "2rem" }}>All done!</h1>
                      <p>
                        Now it's time to enjoy a beverage{" "}
                        <span style={{ fontSize: "2rem" }}>🍻</span>.
                      </p>
                    </>
                  )}
                </>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
