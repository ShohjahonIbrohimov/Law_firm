import React from "react";
import { Form, Input, Button } from "antd";

const AskQuestionForm = ({ handleSendQuestion }) => {
  const onFinish = (values) => {
    handleSendQuestion(values);
    console.log("Success:", values);
  };

  return (
    <Form layout='vertical' onFinish={onFinish}>
      <Form.Item
        name='body'
        label='Savol matni'
        rules={[
          {
            required: true,
            message: "Bu maydon to'ldirilishi shart",
          },
        ]}
      >
        <Input.TextArea rows={10} placeholder='Savolingizni shu yerga yozing' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Yuborish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AskQuestionForm;
