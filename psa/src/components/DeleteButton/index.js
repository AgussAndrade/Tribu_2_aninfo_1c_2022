import React, { useState } from "react";
import trash from "../../utils/icons/red-recycle-bin-icon.jpeg";
import { ConfirmationModal } from "../ConfirmationModal";
import { Icon, IconContainer, Button } from "./styled";

export const DeleteButton = (props) => {
  const { setDelete, optionText } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
    <ConfirmationModal open={showModal} titleText = {"Eliminar"} actionText= {"eliminar " + optionText} onAccept= {()=> setDelete(true)} onClose = {()=> setShowModal(false)}/>
    <Button onClick={() => setShowModal(true)}>
      <Icon src={trash} />
    </Button>
    </div>
  );
};
