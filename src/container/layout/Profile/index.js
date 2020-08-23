import React from "react";
import "../layout.css";
import { EditOutlined } from "@ant-design/icons";
import { Layout, Card, Avatar, Badge, Row, Col } from "antd";
const { Content } = Layout;

const bannerProfile = {
  width: "100%",
  backgroundImage:
    "url(https://images.pexels.com/photos/268966/pexels-photo-268966.jpeg?cs=srgb&dl=pexels-pixabay-268966.jpg&fm=jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  height: "190px",
};

const Profile = () => {
  return (
    <>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={bannerProfile}>
              <Avatar
                style={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  float: "right",
                }}
                icon={<EditOutlined />}
              />
              <div style={{ position: "absolute", marginTop: "100px" }}>
                <Row>
                  <Col span={12}>
                    <span className="avatar-item">
                      <Badge
                        count={<EditOutlined />}
                        style={{
                          color: "#f56a00",
                          fontSize: "20px",
                        }}
                      >
                        <Avatar
                          size={120}
                          shape="square"
                          src="https://avatars1.githubusercontent.com/u/42019007?s=460&u=d12157817ce2c4795d2d040644a9077edf9acaa6&v=4"
                        />
                      </Badge>
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Profile;
