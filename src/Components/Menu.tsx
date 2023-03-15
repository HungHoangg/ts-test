import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { path } from "./../routers/path";
import { getMenuItem } from "../utils/AntDesign";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems: MenuProps["items"] = [
  getMenuItem("Dashboard", path.dashboard),
  getMenuItem("Posts Management", path.tab_post_mng),
  getMenuItem("Settings", path.tab_settings),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

const MenuComponent = () => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleSelect = (data: { key: string }) => {
    navigate(data.key);
  };

  return (
    <>
      <Menu
        items={menuItems}
        mode="inline"
        onClick={handleSelect}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default MenuComponent;

