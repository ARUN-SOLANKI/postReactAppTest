import React, { useState } from "react";
import "../Style/Home.css";
import text from "../Asset/Images/text.png";
import Modals from "../Components/Modals";

const Home = () => {
  const [isLogInTrue, setIsLogInTrue] = useState("Login");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Screen_main">
      <div className="Screen_head">
        <h1 className="Screen_header">Hello Jane</h1>
        <h3 className="Screen_subHeader">
          How are doing today? Would you like to share something with the
          community 🤗
        </h3>
      </div>

      <div className="Post-container">
        <div className="create-post">
          <h1>Create post</h1>
        </div>
        <div className="post-input">
          <div className="circle-img">
            <img src={text}></img>
          </div>
          <input
            className="postInputField"
            type="text"
            placeholder="How Are You Feeling Tonight"
          ></input>
        </div>
        <div className="coverbtn">
          <button className="post-btn" onClick={openModal}>
            POST
          </button>
        </div>
      </div>
      <Modals
        isLogInTrue={isLogInTrue}
        setIsLogInTrue={setIsLogInTrue}
        openModal={openModal}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Home;
