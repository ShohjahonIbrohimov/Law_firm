import React, { useState } from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { LoginOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";
import { logout } from "../redux/auth/auth.actions";
import { useSelector, useDispatch } from "react-redux";

const UserMenu = () => {
  const [visible, setvisible] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const menuItems = [
    {
      icon: <UserOutlined />,
      text: user?.fullName,
      onClick: () => {},
    },
    {
      icon: <LoginOutlined />,
      text: "Chiqish",
      onClick: () => dispatch(logout()),
    },
  ];

  const menu = (
    <Menu>
      {menuItems.map((item) => {
        return (
          <Menu.Item onClick={item.onClick}>
            {item.icon}
            {item.text}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Space>
      <span>
        <DollarOutlined /> Balance: {user.balance} so'm
      </span>
      <Dropdown overlay={menu} placement='bottomRight' visible={visible} arrow>
        <Button
          onClick={() => setvisible(!visible)}
          type='dashed'
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Space>
  );
};

export default UserMenu;
