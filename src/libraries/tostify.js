import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();
function App() {
  const notify = () => {
    toast("Wow so easy!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success Notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Wow so easy!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false,
    });
    toast.error("Wow so easy!", { position: toast.POSITION.BOTTOM_LEFT });
    toast("Wow so easy!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
