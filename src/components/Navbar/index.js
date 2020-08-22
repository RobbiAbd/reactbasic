import React from "react";

import ResponsiveAntMenu from "responsive-ant-menu";

import { Layout, Menu, Avatar } from "antd";
import {
  MenuOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";

import { useRecoilState } from "recoil";
import { visibleDrawer } from "../../store";
import SiderDrawer from "../Drawer";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useRecoilState(visibleDrawer);

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <SiderDrawer />
      <Header
        className="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="logo" />
        <MenuUnfoldOutlined
          style={{
            color: "white",
            fontSize: "21px",
          }}
          onClick={showDrawer}
        />

        <ResponsiveAntMenu
          activeLinkKey=""
          mobileMenuContent={(isMenuShown) =>
            isMenuShown ? (
              <MenuOutlined
                spin={true}
                style={{
                  color: "white",
                  fontSize: "21px",
                  marginLeft: "61px",
                }}
              />
            ) : (
              <MenuOutlined
                spin={false}
                style={{
                  color: "white",
                  fontSize: "21px",
                  marginLeft: "61px",
                }}
              />
            )
          }
          menuClassName={"responsive-ant-menu"}
          theme={(isMobile) => (isMobile ? "dark" : "dark")}
          mode="horizontal"
        >
          {(onLinkClick) => (
            <Menu style={{ float: "right" }}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">
                <BellOutlined />
              </Menu.Item>
              <Menu.Item key="3">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Menu.Item>
            </Menu>
          )}
        </ResponsiveAntMenu>
      </Header>
    </>
  );
};

export default Navbar;
