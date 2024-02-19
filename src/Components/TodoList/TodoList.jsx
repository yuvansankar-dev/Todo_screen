import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";

const TodoList = ({
  todoList,
  setTodoList,
  filterOption,
  setFilterOption,
  updateTodoList,
}) => {
  const filterChange = (event) => {
    setFilterOption(event.target.value);
  };
  return (
    <div>
      <div className='filterPart'>
        <span>My Todos</span>
        <span className='statusFilter'>
          <label>Status Filter : </label>
          <select
            style={
              filterOption === "Not Completed"
                ? { backgroundColor: "#ff5858", color: "white" }
                : { backgroundColor: "#56715f", color: "white" }
            }
            onChange={filterChange}
          >
            <option style={{ backgroundColor: "#56715f", color: "white" }}>
              All
            </option>
            <option style={{ backgroundColor: "#56715f", color: "white" }}>
              Completed
            </option>
            <option style={{ backgroundColor: "#ff5858", color: "white" }}>
              Not Completed
            </option>
          </select>
        </span>
      </div>
      <div className='todoList'>
        {todoList?.reduce((acc, todo, idx) => {
          if (filterOption === "All")
            return [
              ...acc,
              <TodoCard
                todo={todo}
                key={todo.name}
                setTodoList={setTodoList}
                idx={idx}
                updateTodoList={updateTodoList}
              />,
            ];
          if (filterOption === todo.status)
            return [
              ...acc,
              <TodoCard
                todo={todo}
                key={todo.name}
                setTodoList={setTodoList}
                idx={idx}
                updateTodoList={updateTodoList}
              />,
            ];
          return acc;
        }, [])}
      </div>
    </div>
  );
};

export default TodoList;
