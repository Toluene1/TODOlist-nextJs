import { ITasks } from "../../../types/tasks";

interface TaskProps {
  tasks: ITasks;
}

const Task: React.FC<TaskProps> = ({ tasks }) => {
  return (
    <tr key={tasks.id}>
      <td>{tasks.text}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task;
