import React, { useState, useEffect } from "react";
import { Form, Input, Button, Image } from "antd";
import toast from "react-hot-toast";
import img from "../../assets/images/image_upload.png";
import styles from "../../styles/NewsAddForm.module.css";
import { useDispatch } from "react-redux";
import { startCrudNews } from "../../redux/news/news.actions";
import axios from "axios";

const { reset } = Form;

const NewsAddForm = ({ defaults }) => {
  const dispatch = useDispatch();
  const [imageUrl, setimageUrl] = useState(null);
  const [form] = Form.useForm();

  const afterSuccess = () => {
    toast.success(defaults ? "Yangilik tahrirlandi" : "Yangilik qo'shildi");
    if (defaults) {
      dispatch(
        startCrudNews({
          method: "GET",
          url: "api/news/getAll",
          data: "",
          afterSuccess: () => {},
        })
      );
    }
  };

  const onFinish = (values) => {
    form.resetFields();
    if (defaults) {
      dispatch(
        startCrudNews({
          method: "PATCH",
          url: `api/news/${defaults._id}`,
          data: values,
          afterSuccess: () => afterSuccess(),
        })
      );
    } else {
      dispatch(
        startCrudNews({
          url: "api/news",
          method: "POST",
          data: { ...values, img: imageUrl },
          afterSuccess: () => afterSuccess(),
        })
      );
    }
  };

  const handleChange = (e) => {
    var formData = new FormData();
    formData.append("image", e.target.files[0]);

    axios({
      url: "api/upload/uploadImage",
      method: "POST",
      data: formData,
    }).then((res) => setimageUrl(res.data.path));
  };

  useEffect(() => {
    if (defaults) {
      form.setFieldsValue(defaults);
      setimageUrl(defaults.img);
    } else {
      form.resetFields();
      setimageUrl(null);
    }
  }, [defaults]);

  return (
    <div className={styles.form_wrapper}>
      <Form
        layout='vertical'
        form={form}
        name='nest-messages'
        onFinish={onFinish}
        className={styles.form}
      >
        <Form.Item name='title' label='Sarlavha'>
          <Input />
        </Form.Item>

        <Form.Item name='content' label='Kontent'>
          <Input.TextArea style={{ height: "300px" }} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {defaults ? "Tahrirlash" : "Qo'shish"}
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.image_upload_wrapper}>
        <Image
          width='100%'
          src={!imageUrl ? img : `http://134.209.214.252/${imageUrl}`}
        />
        <label className={styles.upload_btn_wrapper}>
          Rasm yuklash
          <input
            type='file'
            name='file'
            id='file'
            class='inputfile'
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default NewsAddForm;
