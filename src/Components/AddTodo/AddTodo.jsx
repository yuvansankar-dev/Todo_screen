import React, { useEffect } from "react";
import "./AddTodo.css";

const AddTodo = ({ todoList, setTodoList, updateTodoList }) => {
  return (
    <div>
      <div className='AddTodo'>
        <input id='AddTodoName' placeholder='Todo Name'></input>
        <input id='AddTodoDescription' placeholder='Todo description'></input>
        <button
          onClick={() =>
            updateTodoList(
              "AddTodoName",
              "AddTodoDescription",
              "AddTodoError",
              "Add"
            )
          }
        >
          Add Todo
        </button>
      </div>
      <span id='AddTodoError'></span>
    </div>
  );
};

export default AddTodo;
