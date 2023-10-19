import React, { useContext } from 'react';
import ModalJoy from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { ModalContext } from "../Layout";
import ContentSection from "./ContentSection";

const Modal = (props) => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  return (
    <ModalJoy
      id={props.id}
      open={openModal === props.id}
      onClose={() => setOpenModal(false)}
    >
      <ModalDialog
        sx={{
          maxWidth: ["90%", "80%", "70%", "900px"],
          width: "100%",
          padding: 0,
        }}
      >
        <ModalClose color={"primary"} />
        <ContentSection {...props} />
      </ModalDialog>
    </ModalJoy>
  )
}

export default Modal;