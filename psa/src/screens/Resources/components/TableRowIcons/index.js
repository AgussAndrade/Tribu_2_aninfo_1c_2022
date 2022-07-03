import { React, useState } from "react";
import { TableIcon } from "./styled";
import { ConfirmationModal } from "../../../../components/ConfirmationModal";
import { EditHoursModal } from "../EditHoursModal";

function editHours() {
    console.log('edit')
}

function deleteHours() {
    console.log('delete')
}

export const TableRowIcons = (props) => {
    // const {optionText} = props
    const optionText = "horas"
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return(
        <td>
            <TableIcon className="icon-pencil" onClick={() => setShowEditModal(true)}></TableIcon>
            <EditHoursModal
                show={showEditModal}
                setShow={setShowEditModal}
            />
            <TableIcon className="icon-trash" onClick={() => setShowDeleteModal(true)}></TableIcon>
            <ConfirmationModal 
                open={showDeleteModal}
                titleText = {"Eliminar"}
                actionText= {"eliminar " + optionText}
                onAccept= {deleteHours}
                onClose = {()=> setShowDeleteModal(false)}
            />
        </td>
    );
};

