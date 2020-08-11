import React from "react";

import { Card, Col, Row } from "antd";

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
                cover={
                  <img
                    alt="example"
                    src={movie.Poster}
                    style={{ height: "500px" }}
                  />
                }
                bordered={false}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta title={movie.Title} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MovieCard;
