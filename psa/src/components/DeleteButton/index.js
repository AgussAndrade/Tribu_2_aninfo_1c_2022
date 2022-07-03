import React, { useState } from "react";
import { colors } from "../../utils/colors";
import trash from "../../utils/icons/red-recycle-bin-icon.jpeg";
import { ConfirmationModal } from "../ConfirmationModal";
import { GenericButton } from "../GenericButton";
import { Icon, IconContainer, Button } from "./styled";

export const DeleteButton = (props) => {
  const { setDelete, optionText, icon } = props;
  const [showModal, setShowModal] = useState(false);

  const ButtonType = () => {
    return icon ? (
      <Button onClick={() => setShowModal(true)}>
        <Icon src={trash} />
      </Button>
    ) : (
      <GenericButton
        color={colors.red}
        name={"Eliminar " + optionText}
        onClick={() => setShowModal(true)}
      />
    );
  };

  return (
    <div>
      <ConfirmationModal
        open={showModal}
        titleText={"Eliminar"}
        actionText={"eliminar " + optionText}
        onAccept={() => setDelete(true)}
        onClose={() => setShowModal(false)}
      />
      <ButtonType/>
    </div>
  );
};
