import ModalJoy from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import React, { useContext } from 'react';
import { ModalContext } from "../Layout";
import ContentSection from "./ContentSection";

const Modal = (props) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  return (
    <div id="PLEASE">
      <ModalJoy
        id={props.id}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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
    </div>
  )
}

export default Modal;