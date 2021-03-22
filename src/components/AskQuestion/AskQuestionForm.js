import React from "react";
import { Form, Input } from "antd";

const AskQuestionForm = () => {
  return (
    <Form layout='vertical'>
      <Form.Item
        name='description'
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
    </Form>
  );
};

export default AskQuestionForm;
