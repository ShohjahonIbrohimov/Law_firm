import React from "react";
import questions from "./questions.json";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const Questions = () => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className='site-collapse-custom-collapse'
    >
      {questions.map((q) => {
        return (
          <Panel
            header={q.title}
            key={q.id}
            className='site-collapse-custom-panel'
          >
            <p>{q.body}</p>
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Questions;
