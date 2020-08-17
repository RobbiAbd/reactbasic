import React from "react";
import { Menu } from "antd";

const navList = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
];

const Nav = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
      {navList.map((data, i) => {
        return <Menu.Item key={i}>{data.name}</Menu.Item>;
      })}
    </Menu>
  );
};

export default Nav;
