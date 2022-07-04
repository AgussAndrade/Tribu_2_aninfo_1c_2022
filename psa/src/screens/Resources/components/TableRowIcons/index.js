import { React, useState } from "react";
import { TableIcon } from "./styled";
import { ConfirmationModal } from "../../../../components/ConfirmationModal";
import { EditHoursModal } from "../EditHoursModal";
import axios from "axios";

function deleteHours() {
    console.log('delete')
}

export const TableRowIcons = (props) => {
    const {id, setHours} = props
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const deleteHours = async () => {
        const res = await axios.delete(`https://squad5-recursos.herokuapp.com/api/horas/${id}`)
        console.log(res.status)
        if (res.status == 200) {
            setShowDeleteModal(false)
            console.log("Update Resources table")
        }
    }

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

