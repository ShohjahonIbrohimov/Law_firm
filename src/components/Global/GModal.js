import React from "react";
import { Modal } from "antd";

const GModal = ({ title, children, open, setopen, width }) => {
  const handleOk = () => {
    setopen(false);
  };

  const handleCancel = () => {
    setopen(false);
  };

  return (
    <>
      <Modal
        title={title}
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={width}
      >
        {children}
      </Modal>
    </>
  );
};

export default GModal;
