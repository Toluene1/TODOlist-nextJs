import { ITasks } from "../../../types/tasks";
import Task from "./Task";

interface TodoListsProps {
  tasks: ITasks[];
}

const TodoLists: React.FC<TodoListsProps> = ({ tasks }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold">
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((tasks) => (
              <Task key={tasks.id} tasks={tasks} />
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default TodoLists;
