import React from "react";

import { Card, Col, Row, Avatar } from "antd";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const MovieCard = (props) => {
  return (
    <>
      <Row gutter={16}>
        {props.movies.map((movie, i) => {
          return (
            <Col key={i} xl={{ span: 8 }}>
              <Card
                title={movie.Type}
                cover={<img alt="example" src={movie.Poster} />}
                bordered={false}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://avatars1.githubusercontent.com/u/42019007?s=460&u=d12157817ce2c4795d2d040644a9077edf9acaa6&v=4" />
                  }
                  title={movie.Title}
                  description="This is the description"
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MovieCard;
