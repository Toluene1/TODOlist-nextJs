import { promises } from "dns";
import { ITasks } from "./types/tasks";

const baseUrl = "http://localhost:3002/tasks";

export const getAllTodos = async (): Promise<ITasks[]> => {
  const res = await fetch(`${baseUrl}`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};
export const AddTodo = async (todo: ITasks): Promise<ITasks> => {
  const res = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITasks): Promise<ITasks> => {
  const res = await fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const upadetTodo = await res.json();
  return upadetTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
