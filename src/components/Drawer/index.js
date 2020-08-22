import React from "react";

import { Drawer, Row, Col, Menu } from "antd";

import { MenuFoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { visibleDrawer } from "../../store";
import { pageRoutes } from "../../config/router";

const SiderDrawer = (props) => {
  const [visible, setVisible] = useRecoilState(visibleDrawer);

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
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

      <Menu theme="light" mode="inline" defaultSelectedKeys={["0"]}>
        {pageRoutes.map((data, i) => {
          return (
            <Menu.Item key={i} icon={data.icon}>
              <Link to={data.path} onClick={closeDrawer}>
                {data.name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Drawer>
  );
};

export default SiderDrawer;
