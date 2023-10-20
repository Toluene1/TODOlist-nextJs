"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { AddTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const router = useRouter();
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await AddTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    console.log(newTaskValue);
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task <AiOutlinePlus size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModelOpen={setModalOpen}>
        <form className="font-bold text-lg" onSubmit={handleSubmitNewTodo}>
          {" "}
          Add new task
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
}
