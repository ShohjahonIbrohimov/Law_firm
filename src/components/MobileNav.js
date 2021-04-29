import React from "react";
import { Drawer, List } from "antd";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const MobileNav = ({ visible, setvisible, navItems }) => {
  const onClose = () => {
    setvisible(false);
  };

  return (
    <Drawer
      placement='top'
      width='100%'
      height='60vh'
      onClose={onClose}
      visible={visible}
      footer={<SocialMedia />}
      title='Sayt Menyulari'
    >
      <List
        size='small'
        header={null}
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

export default MobileNav;
