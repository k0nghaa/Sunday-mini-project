import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoForm } from "./TodoForm";

export const Todo = ({ todo, onToggle, onDelete, onEdit, onUpdate }) => {
  return (
    <div className="Todo">
      {todo.isEditing ? (
        <TodoForm
          isEditing={true}
          initialValue={todo.task}
          onSubmit={(text) => onUpdate(todo.id, text)}
        />
      ) : (
        <>
          <p
            onClick={() => onToggle(todo.id)}
            className={`${todo.completed ? "completed" : ""}`}
          >
            {todo.task}
          </p>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => onEdit(todo.id)}
            />
            <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(todo.id)} />
          </div>
        </>
      )}
    </div>
  );
};
