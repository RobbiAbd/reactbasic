import React, { useState } from "react";
import pageRoutes from "../../../config/router";

import { Switch, Route, Link } from "react-router-dom";

import "./style.css";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
          {pageRoutes.map((data, i) => {
            return (
              <Menu.Item key={i} icon={data.icon}>
                <Link to={data.path}>{data.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Dashboard / </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              {pageRoutes.map((data, i) => {
                return (
                  <Route
                    exact
                    key={i}
                    path={data.path}
                    component={data.component}
                  />
                );
              })}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Robbi Abdul Rohman</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
