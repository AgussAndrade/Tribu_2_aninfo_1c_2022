import { React, useState } from "react";
import { TableIcon } from "./styled";
import { ConfirmationModal } from "../../../../components/ConfirmationModal";
import { EditHoursModal } from "../EditHoursModal";

function deleteHours() {
    console.log('delete')
}

export const TableRowIcons = (props) => {
    const {id, setHours} = props
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return(
        <td>
            <TableIcon className="icon-pencil" onClick={() => setShowEditModal(true)}></TableIcon>
            <EditHoursModal
                id={id}
                show={showEditModal}
                setShow={setShowEditModal}
                setHours={setHours}
            />
            <TableIcon className="icon-trash" onClick={() => setShowDeleteModal(true)}></TableIcon>
            <ConfirmationModal 
                open={showDeleteModal}
                titleText = {"Eliminar"}
                actionText= {"eliminar horas"}
                onAccept= {deleteHours}
                onClose = {()=> setShowDeleteModal(false)}
            />
        </td>
    );
};

