import React from "react";
import "./style.css";
import "../layout.css";

import { Layout } from "antd";
const { Content } = Layout;

const Dashboard = () => {
  return (
    <>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          content
        </div>
      </Content>
    </>
  );
};

export default Dashboard;
