import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../redux/auth/auth.actions";
import toast from "react-hot-toast";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function App({ sethasAccount, setopen }) {
  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const afterSuccess = () => {
    setLoading(false);
    toast.success("Akkauntga kirdingiz");
  };

  const afterError = () => {
    setLoading(false);
    toast.error("Login yoki parol xato");
  };

  const onFinish = (data) => {
    setLoading(true);
    dispatch(startLogin({ data, afterSuccess, afterError }));
  };

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      layout='vertical'
      size='large'
    >
      <Form.Item
        name='phone'
        rules={[
          {
            required: true,
            message: "Iltimos telefon nomerni kiriting!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Telefon nomer'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: "Iltimos parolni kiriting!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Parol'
        />
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          type='primary'
          htmlType='submit'
          className='login-form-button'
          style={{
            width: "100%",
          }}
        >
          Log in
        </Button>
        Yoki{" "}
        <span onClick={() => sethasAccount(false)}>Ro'yxatdan o'ting!</span>
      </Form.Item>
    </Form>
  );
}
