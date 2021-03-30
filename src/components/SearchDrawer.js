import React, { useState } from "react";
import { Drawer, List } from "antd";
import { Link } from "react-router-dom";
import { Input } from "antd";

const { Search } = Input;

const SearchDrawer = ({ visible, setvisible, navItems }) => {
  const [loading, setloading] = useState(false);
  const onClose = () => {
    setvisible(false);
  };

  return (
    <Drawer
      placement='top'
      width='100%'
      height='70vh'
      onClose={onClose}
      visible={visible}
      footer={null}
      title='Qidiruv tizimi'
      bodyStyle={{
        padding: "0.5rem",
      }}
    >
      <List
        size='small'
        header={
          <Search
            placeholder='Nima izlayapsiz ?'
            enterButton='Qidirish'
            size='large'
            loading={loading}
          />
        }
        footer={null}
        bordered
        dataSource={navItems}
        renderItem={(item) => (
          <List.Item>
            <Link to={item.url}>{item.text}</Link>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default SearchDrawer;
