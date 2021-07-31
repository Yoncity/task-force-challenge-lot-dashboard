import { useState } from "react";
import Modal from "../common/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1>Hello there</h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      <Modal
        header="Modal Header"
        children={"Children Come Here"}
        footer="Footer"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Home;
