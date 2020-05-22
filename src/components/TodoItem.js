import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      textAlign: 'left'
    }
  }

  render() {

    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>❌</button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {

    border: 'none',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
