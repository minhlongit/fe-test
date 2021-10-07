import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import Todo from "./Todo";
export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });

    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });

    setTodos(newTodos);
    setCheckAll(false);
  };
  return (
    <>
      {todos.length === 0 ? (
        <h2>Todo List Empty</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>You have {todos.length} todo</p>
          <button onClick={deleteTodo} id="delete">
            Delete
          </button>
        </div>
      )}
    </>
  );
}
