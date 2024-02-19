import React, { useState } from "react";
import "./TodoCard.css";

const TodoCard = ({ todo, setTodoList, idx, updateTodoList }) => {
  const [editTodo, setEditTodo] = useState(false);
  const [nameFieldId, descriptionFieldId, errorFieldId] = [
    `editTodoName${todo.name}`,
    `editTodoDescription${todo.name}`,
    `editError${todo.name}`,
  ];

  const statusChange = (event) => {
    setTodoList((pre) => {
      pre[idx].status = event.target.value;
      return [...pre];
    });
  };

  const saveClick = () => {
    updateTodoList(
      nameFieldId,
      descriptionFieldId,
      errorFieldId,
      "update",
      idx
    ) && saveChanges();
  };
  const saveChanges = () => {
    const changedName = document.getElementById(nameFieldId).value;
    const changedDescription =
      document.getElementById(descriptionFieldId).value;
    setEditTodo(false);
    if (todo.name !== changedName || todo.description !== changedDescription) {
      setTodoList((pre) => {
        pre[idx].name = changedName;
        pre[idx].description = changedDescription;
        return [...pre];
      });
    }
  };

  const deleteTodo = () => {
    setTodoList((pre) => {
      return pre.toSpliced(idx, 1);
    });
  };

  return (
    <div className='todoCard'>
      <div>
        {editTodo ? (
          <>
            <input
              id={nameFieldId}
              className='editInput'
              defaultValue={todo.name}
            ></input>
            <input
              id={descriptionFieldId}
              className='editInput'
              defaultValue={todo.description}
            ></input>
          </>
        ) : (
          <div>
            <div className='todoInfo'>{`Name : ${todo.name}`}</div>
            <div className='todoInfo'>{`Description : ${todo.description}`}</div>
          </div>
        )}
        <select
          value={todo.status}
          style={
            todo.status === "Completed"
              ? { backgroundColor: "#56715f", color: "white" }
              : { backgroundColor: "#ff5858", color: "white" }
          }
          onChange={statusChange}
        >
          <option style={{ backgroundColor: "#56715f", color: "white" }}>
            Completed
          </option>
          <option style={{ backgroundColor: "#ff5858", color: "white" }}>
            Not Completed
          </option>
        </select>
        <div className='buttonStyle'>
          {editTodo ? (
            <div>
              <button
                className='buttonproperty'
                style={{ backgroundColor: "#7575b1" }}
                onClick={saveClick}
              >
                save
              </button>

              <div id={errorFieldId} className='error'></div>
            </div>
          ) : (
            <>
              <button
                className='buttonproperty'
                style={{ backgroundColor: "#56715f" }}
                onClick={() => setEditTodo(true)}
              >
                Edit
              </button>
              <button
                className='buttonproperty'
                style={{ backgroundColor: "#ff5858" }}
                onClick={deleteTodo}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
