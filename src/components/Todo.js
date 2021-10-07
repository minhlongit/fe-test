import React, { useState } from "react";

export default function Todo({
  todo,
  id,
  checkComplete,
  handleEditTodos,
  handleDeleteTodo,
}) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const handleEdit = () => {
    setOnEdit(true);
  };

  const handleDelete = (id) => {
    handleDeleteTodo(id);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };
  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          name="editValue"
          onChange={(e) => setEditValue(e.target.value.toLowerCase())}
          value={editValue}
        />

        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label className={todo.complete ? "active" : ""} htmlFor={id}>
          <input
            className="checkbox"
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <div>
          <button disabled={todo.complete} onClick={handleEdit}>
            Edit
          </button>
          <button disabled={todo.complete} onClick={() => handleDelete(id)}>
            X
          </button>
        </div>
      </li>
    );
  }
}
