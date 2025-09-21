import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoForm } from "./TodoForm";

export const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
  updateTodo,
}) => {
  return (
    <div className="Todo">
      {task.isEditing ? (
        <TodoForm
          isEditing={true}
          initialValue={task.task}
          onSubmit={(text) => updateTodo(task.id, text)}
        />
      ) : (
        <>
          <p
            onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? "completed" : ""}`}
          >
            {task.task}
          </p>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
            />
          </div>
        </>
      )}
    </div>
  );
};
