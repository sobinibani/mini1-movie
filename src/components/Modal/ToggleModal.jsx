import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const ToggleModal = ({ setToggleModal, userName, handleLogout }) => {
  const toggleHandleLogout = () => {
    setToggleModal(false);
    handleLogout();
  };

  return (
    <div className="ToggleModal">
      <div className="toggleRow row1">
        <div className="inner">
          <button
            onClick={() => {
              setToggleModal(false);
            }}
            className="closeBtn"
          >
            <IoCloseOutline />
          </button>
        </div>
      </div>
      <div className="toggleRow row2">
        <div className="inner">
          <p className="user">
            <span>{userName}</span>님
          </p>
          <button onClick={toggleHandleLogout} className="logoutBtn">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleModal;
