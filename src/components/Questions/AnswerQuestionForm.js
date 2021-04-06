import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import toast, { Toaster } from "react-hot-toast";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { startCrudQuestions } from "../../redux/questions/questions.actions";

export default function App({ sethasAccount, setopen, currentQuestion }) {
  let [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const afterSuccess = () => {
    setLoading(false);
    setopen(false);
    toast.success("Savolga javob yuborildi");
  };

  useEffect(() => {
    if (currentQuestion) form.setFieldsValue(currentQuestion);
  }, [currentQuestion]);

  const onFinish = (data) => {
    setLoading(true);
    dispatch(
      startCrudQuestions({
        url: `/api/questions/${currentQuestion._id}`,
        data: {
          answer_user: user._id,
          answer_body: data.answer_body,
        },
        method: "PATCH",
        afterSuccess,
        afterError: () => {},
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name='basic'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size='large'
      form={form}
    >
      <Form.Item
        name='answer_body'
        rules={[
          {
            required: true,
            message: "Iltimos parolni kiriting",
          },
        ]}
      >
        <Input.TextArea placeholder='Javob' style={{ height: "200px" }} />
      </Form.Item>
      <Form.Item>
        <Button
          loading={loading}
          type='primary'
          htmlType='submit'
          style={{ width: "100%" }}
        >
          {currentQuestion ? "Tahrirlash" : "Yuborish"}
        </Button>
      </Form.Item>
    </Form>
  );
}
