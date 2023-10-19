import { promises } from "dns";
import { ITasks } from "./types/tasks";

const baseUrl = "http://localhost:3002/tasks";

export const getAllTodos = async (): Promise<ITasks[]> => {
  const res = await fetch(`${baseUrl}`);
  const todos = await res.json();
  return todos;
};
