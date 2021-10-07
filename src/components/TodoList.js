import React, { useContext } from "react";
import Todo from "./Todo";
import { DataContext } from "./DataProvider";

export default function TodoList() {
  const [todos, setTodo] = useContext(DataContext);
  const checkComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });

    setTodo(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodo(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = [...todos];
    const valueDelete = newTodos.filter((todo, index) => index !== id);
    setTodo(valueDelete);
  };

  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={index}
            id={index}
            checkComplete={checkComplete}
            handleEditTodos={handleEditTodos}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </ul>
  );
}
