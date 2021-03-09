import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import SpinnerBtn from "./Global/SpinnerBtn";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startSignup } from "../redux/auth/auth.actions";

export default function App({ sethasAccount }) {
  let [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(startSignup(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
      <input name='fullName' ref={register} placeholder='F.I.SH' />
      <input name='login' ref={register} placeholder='login' />
      <input name='phone' ref={register} placeholder='+998' />
      <input name='password' ref={register} placeholder='parol' />
      <input name='role' ref={register} placeholder='role' />

      <div style={{ display: "flex" }}>
        <label htmlFor='erkak' style={{ marginRight: "1rem" }}>
          Erkak:{" "}
          <input
            name='gender'
            type='radio'
            value='Erkak'
            ref={register({ required: true })}
          />
        </label>

        <label htmlFor='ayol'>
          Ayol:
          <input
            name='gender'
            type='radio'
            value='Ayol'
            ref={register({ required: true })}
          />
        </label>
      </div>
      <a
        href='?'
        onClick={(e) => {
          e.preventDefault();
          sethasAccount(true);
        }}
      >
        Ro'yxatdan o'tkanmisiz ? Kirish
      </a>
      <SpinnerBtn loading={loading} text="Ro'yxatdan o'tish" />
    </form>
  );
}
