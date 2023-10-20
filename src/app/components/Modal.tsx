interface ModalProps {
  modalOpen: boolean;
  setModelOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModelOpen, children }) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modalOpen ? "modal-open" : ""} `}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModelOpen(false)}
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
