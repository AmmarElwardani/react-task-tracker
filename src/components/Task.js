import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Task = ({ task, onDelete, onToggle }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteModalHandler() {
    
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    
    setModalIsOpen(false);
  }
  function confirmModalHandler(){
    onDelete(task.id);
    setModalIsOpen(false);
 }

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {" "}
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={deleteModalHandler}
        />
      </h3>
      <p> {task.day} </p>
      {modalIsOpen && <Modal  onClick={closeModalHandler} onConfirm={confirmModalHandler} task={task} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Task;
