"use client";
import { ITasks } from "../../../types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";
import { v4 as uuidv4 } from "uuid";

interface TaskProps {
  tasks: ITasks;
}

const Task: React.FC<TaskProps> = ({ tasks }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(tasks.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: tasks.id,
      text: taskToEdit,
    });
    console.log(setTaskToEdit);
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };
  return (
    <tr key={tasks.id}>
      <td className="w-full">{tasks.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-800"
          size={23}
        />
        <Modal modalOpen={openModalEdit} setModelOpen={setOpenModalEdit}>
          <form className="font-bold text-lg" onSubmit={handleSubmitEditTodo}>
            {" "}
            Edit task
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-800"
          size={23}
        />
        <Modal modalOpen={openModalDelete} setModelOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure you want to delete this task?
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteTask(tasks.id)}
              className="btn text-white bg-red-900"
            >
              yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
