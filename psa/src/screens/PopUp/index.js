import { Modal } from "../../components/Modal";
import React, { useState } from "react";

export const PopUp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <p>aaaaaaaaaaa</p>
      <button onClick={() => setShowModal(true)}> abrir pop up</button>
      <Modal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
