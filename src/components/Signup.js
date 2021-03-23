import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { startSignup } from "../redux/auth/auth.actions";
import toast, { Toaster } from "react-hot-toast";

export default function App({ sethasAccount, setopen }) {
  let [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const afterSuccess = () => {
    setLoading(false);
    setopen(false);
    toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
  };

  const onFinish = (data) => {
    setLoading(true);
    dispatch(startSignup({ data, afterSuccess: () => afterSuccess() }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size='large'
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: "Iltimos, Familiya, ism sharf kiriting",
          },
        ]}
      >
        <Input placeholder='F.I.SH.' />
      </Form.Item>

      <Form.Item
        name='login'
        rules={[
          {
            required: true,
            message: "Iltimos Login ni kiriting",
          },
        ]}
      >
        <Input placeholder='Login' />
      </Form.Item>

      <Form.Item
        name='phone'
        rules={[
          {
            required: true,
            message: "Iltimos Telfoningizni kiriting",
          },
        ]}
      >
        <Input placeholder='+998 XX XXX XX XX' />
      </Form.Item>
      <Form.Item
        name='role'
        rules={[
          {
            required: true,
            message: "rol",
          },
        ]}
      >
        <Input placeholder='+998 XX XXX XX XX' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: "Iltimos parolni kiriting",
          },
        ]}
      >
        <Input.Password placeholder='Parol' />
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          type='primary'
          htmlType='submit'
          style={{ width: "100%" }}
        >
          Ro'yxatdan o'tish
        </Button>
        <span onClick={() => sethasAccount(true)}>Akkauntga kirish</span>
      </Form.Item>
    </Form>
  );
}
