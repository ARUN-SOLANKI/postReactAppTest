import React from "react";
import Modal from "react-modal";
import SignUp from "./Signup";
import Login from "./Login";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
  },
};

export default function Modals({
  isLogInTrue,
  setIsLogInTrue,
  closeModal,
  setIsOpen,
  modalIsOpen,
}) {
  let subtitle;
  function afterOpenModal() {
    subtitle.style.color = "red";
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {isLogInTrue == "Login" ? (
          <Login setIsLogInTrue={setIsLogInTrue} />
        ) : (
          <SignUp setIsLogInTrue={setIsLogInTrue} />
        )}
      </Modal>
    </div>
  );
}
