import React from "react";
import "../layout.css";
import { EditOutlined } from "@ant-design/icons";
import { Layout, Card, Avatar } from "antd";
const { Content } = Layout;

const Profile = () => {
  return (
    <>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className="site-card-border-less-wrapper">
            <Card
              bordered={false}
              style={{ width: "100%", backgroundColor: "#c4c4c4" }}
            >
              <Avatar
                style={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  float: "right",
                }}
                icon={<EditOutlined />}
              />
            </Card>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Profile;
