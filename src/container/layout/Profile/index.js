import React from "react";
import "../layout.css";

import { Layout } from "antd";
const { Content } = Layout;

const Profile = () => {
  return (
    <>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          profile
        </div>
      </Content>
    </>
  );
};

export default Profile;
