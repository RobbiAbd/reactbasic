import React from "react";
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Home from "../../container/layout/pages/Home";
import Contact from "../../container/layout/pages/Contact";
import Profile from "../../container/layout/pages/Profile";

const pageRoutes = [
  {
    icon: <HomeOutlined />,
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    icon: <UserOutlined />,
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
  {
    icon: <ContactsOutlined />,
    name: "Contact",
    path: "/contact",
    component: Contact,
  },
];

export default pageRoutes;
