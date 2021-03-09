import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import SpinnerBtn from "./Global/SpinnerBtn";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startLogin } from "../redux/auth/auth.actions";
import toast, { Toaster } from "react-hot-toast";

const defaultValues = {
  login: "",
  password: "",
};

export default function App({ sethasAccount }) {
  let [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const dispatch = useDispatch();

  const afterSuccess = () => {
    setLoading(false);
    toast.success("Akkauntnga kirdingiz");
  };

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(startLogin({ data, afterSuccess: () => afterSuccess() }));
  };

  useEffect(() => {
    // reset({ login: user.login, password: user.password });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
      <input name='login' ref={register} placeholder='Login' />
      <input name='password' ref={register} placeholder='Parol' />
      <a
        href='?'
        onClick={(e) => {
          e.preventDefault();
          sethasAccount(false);
        }}
      >
        Ro'yxatdan o'tish
      </a>
      <SpinnerBtn loading={loading} text='Kirish' />
      <Toaster />
    </form>
  );
}
