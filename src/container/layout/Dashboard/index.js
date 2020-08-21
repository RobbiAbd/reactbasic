import React, { useState } from "react";
import "./style.css";
import ResponsiveAntMenu from "responsive-ant-menu";
import { Layout, Menu, Drawer, Row, Col } from "antd";

import {
  MenuOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible({
      visible: true,
    });
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Drawer
        title=""
        placement="left"
        closable={false}
        visible={visible}
        getContainer={false}
        style={{ position: "fixed" }}
      >
        <Row>
          <Col span={20}>Robbi</Col>
          <Col span={4}>
            <div style={{ float: "right" }}>
              <MenuFoldOutlined
                style={{
                  fontSize: "21px",
                }}
                onClick={closeDrawer}
              />
            </div>
          </Col>
        </Row>

        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Drawer>
      <Layout>
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
            theme="dark"
            mode="horizontal"
          >
            {(onLinkClick) => (
              <Menu style={{ float: "right" }}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            )}
          </ResponsiveAntMenu>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Robbi Abdul Rohman</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
