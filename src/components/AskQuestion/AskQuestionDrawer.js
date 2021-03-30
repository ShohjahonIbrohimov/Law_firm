import React, { useState } from "react";
import { Drawer, Button } from "antd";
import AskQuesionForm from "./AskQuestionForm";
import toast from "react-hot-toast";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { startCrudQuestions } from "../../redux/questions/questions.actions";

const AskQuestionDrawer = ({ visible, setvisible }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const afterSuccess = () => {
    toast.success("Savol muvaffaqiyatli yuborildi");
  };

  const afterError = () => {
    toast.error("Xatolik yuz berdi");
  };

  const onClose = () => {
    setvisible(false);
  };

  const handleSendQuestion = (data) => {
    data.author = user._id;
    dispatch(
      startCrudQuestions({
        url: "/api/questions",
        data,
        method: "POST",
        afterSuccess,
        afterError,
      })
    );
  };

  return (
    <>
      <Drawer
        title='Savol yuborish'
        width='100%'
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
          </div>
        }
      >
        <AskQuesionForm handleSendQuestion={handleSendQuestion} />
      </Drawer>
    </>
  );
};

export default AskQuestionDrawer;
