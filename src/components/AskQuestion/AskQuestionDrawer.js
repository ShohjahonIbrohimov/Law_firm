import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AskQuesionForm from "./AskQuestionForm";

const AskQuestionDrawer = ({visible, setvisible}) => {

  const showDrawer = () => {
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };

  return (
    <>
      <Drawer
        title="Savol yuborish"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Bekor qilish
            </Button>
            <Button onClick={onClose} type='primary'>
              Yuborish
            </Button>
          </div>
        }
      >
        <AskQuesionForm />
      </Drawer>
    </>
  );
};

export default AskQuestionDrawer;
