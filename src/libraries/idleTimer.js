import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimerComp(props) {
  const idleTimerRef = useRef(null);
  const [isloggedIn, setisloggedIn] = useState(true);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log("user is idle");
    setmodalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const stayActive = () => {
    setmodalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is active");
  };

  const logOut = () => {
    setmodalIsOpen(false);
    setisloggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User has logged out");
  };
  return (
    <div>
      {isloggedIn ? <h2>Hello Bikash</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log Me Out</button>
          <button onClick={stayActive}>keep Me Signed me</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}

export default IdleTimerComp;

// TODO: https://www.npmjs.com/package/react-idle-timer
