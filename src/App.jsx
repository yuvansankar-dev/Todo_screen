import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterOption, setFilterOption] = useState("All");

  const updateTodoList = (
    todoName,
    todoDescription,
    error,
    operation,
    ignoreIndex = -1
  ) => {
    const name = document.getElementById(todoName);
    const description = document.getElementById(todoDescription);
    const errorMessage = document.getElementById(error);

    const alreadyAdded = todoList.find((a, idx) => {
      const res = ignoreIndex !== idx ? a.name === name.value : false;
      return res;
    });
    if (!alreadyAdded && name.value && description.value) {
      if (operation === "Add") {
        const newTodo = {
          name: name.value,
          description: description.value,
          status: "Not Completed",
        };
        setTodoList((pre) => [...pre, newTodo]);
        name.value = "";
        description.value = "";
        errorMessage.style.display = "none";
      } else {
        return "Changeable";
      }
    } else {
      errorMessage.style.display = "inline";
      errorMessage.innerHTML =
        name.value && description.value
          ? "Entered Todo name is already exist"
          : "Name and description should not be empty";
      return false;
    }
  };

  return (
    <div className='main'>
      <div className='title'>My todo</div>
      <AddTodo
        todoList={todoList}
        setTodoList={setTodoList}
        updateTodoList={updateTodoList}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        updateTodoList={updateTodoList}
      />
    </div>
  );
}

export default App;
