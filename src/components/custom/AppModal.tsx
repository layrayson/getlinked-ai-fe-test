import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  onAfterOpen?: () => void;
  handleClose?: () => void;
  children: ReactNode;
};
const customStyles = {
  overlay: {
    backgroundColor: "#00000061",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "472px",
    width: "100%",
    border: "none",
    borderRadius: "18px",
    padding: "0px",
    maxHeight: "80vh",
  },
};

export const AppModal = ({
  isOpen,
  onAfterOpen,
  handleClose,
  children,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="app-modal"
      //   className={"max-w-40"}
    >
      <div className="w-full">{children}</div>
    </Modal>
  );
};
