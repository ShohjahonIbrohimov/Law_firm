import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startLogin } from "../redux/auth/auth.actions";
import toast, { Toaster } from "react-hot-toast";
import { Form, Input, Button, Checkbox } from "antd";
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
        name='login'
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className='login-form-forgot' href=''>
          Forgot password
        </a>
      </Form.Item> */}

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
      <Toaster />
    </Form>
  );
}
