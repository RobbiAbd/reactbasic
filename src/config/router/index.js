import React from "react";
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const pageRoutes = [
  {
    icon: <UserOutlined />,
    name: "Users",
    path: "/",
  },
  {
    icon: <VideoCameraOutlined />,
    name: "Video",
    path: "/profile",
  },
  {
    icon: <UploadOutlined />,
    name: "Upload",
    path: "/contact",
  },
];

export default pageRoutes;
