import React from "react";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import Dashboard from "../../container/layout/Dashboard";
import Profile from "../../container/layout/Profile";

export const pageRoutes = [
  {
    icon: <DashboardOutlined />,
    name: "Dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    icon: <UserOutlined />,
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
];
