"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task <AiOutlinePlus size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModelOpen={setModalOpen} />
    </div>
  );
}
