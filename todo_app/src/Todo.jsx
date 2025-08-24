import { useState } from "react";
import "./Todo.css";
import uuid4 from "uuid4";

function Todo() {
  let [todo, setTodo] = useState([{ task: "Code", id: uuid4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  function addInput(event) {
    setNewTodo(event.target.value);
  }

  function addBtn() {
    setTodo([...todo, { task: newTodo, id: uuid4(), isDone: false }]);
    setNewTodo("");
  }

  function isDoneAll() {
    setTodo((prevTask) =>
      prevTask.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  }

  function isDoneOne(id) {
    setTodo((prevTask) =>
      prevTask.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  }

  function deleteList(id) {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  }


  return (
    <div className="todo">
      <h2>Todo list</h2>

      <div className="addFeild">
        <input
          type="text"
          placeholder="Add a task"
          onChange={addInput}
          value={newTodo}
        ></input>

        <button onClick={addBtn} className="addBtn">
          Add
        </button>
      </div>

      <div className="items">
        {todo.map((todo) => {
          return (
            <div className="list" key={todo.id}>
              <p
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.task}
              </p>

              <div className="options">
                <i
                  className="fa-solid fa-square-check"
                  onClick={() => isDoneOne(todo.id)}
                ></i>

                <i
                  className="fa-solid fa-trash"
                  onClick={() => deleteList(todo.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <p className="isDone" onClick={isDoneAll}>
        <span>Complete All</span>
      </p>
    </div>
  );
}
export default Todo;

