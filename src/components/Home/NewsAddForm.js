import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { startCrudNews } from "../../redux/news/news.actions";
import axios from "axios";

const { reset } = Form;

const NewsAddForm = ({ defaults }) => {
  // const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [imageUrl, setimageUrl] = useState("/dss.jpg");
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
    console.log(values);
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

  // const handleChange = (info) => {
  //   console.log(info);
  //   var formData = new FormData();
  //   formData.append("image", info.fileList[0]);
  //   if (info.file.status === "uploading") {
  //     axios({
  //       url: "api/upload/uploadImage",
  //       method: "POST",
  //       data: formData,
  //     }).then((res) => console.log(res));
  //     setloading(true);
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (imageUrl) =>
  //       this.setState({
  //         imageUrl,
  //         loading: false,
  //       })
  //     );
  //   }
  // };

  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );

  useEffect(() => {
    form.setFieldsValue(defaults);
  }, [defaults]);

  return (
    <Form
      layout='vertical'
      form={form}
      name='nest-messages'
      onFinish={onFinish}
    >
      <Form.Item name='title' label='Sarlavha'>
        <Input />
      </Form.Item>

      <Form.Item name='content' label='Kontent'>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          {defaults ? "Tahrirlash" : "Qo'shish"}
        </Button>
      </Form.Item>

      {/* <Upload
        name='avatar'
        listType='picture-card'
        className='avatar-uploader'
        showUploadList={false}
        // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt='avatar' style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload> */}
    </Form>
  );
};

export default NewsAddForm;
