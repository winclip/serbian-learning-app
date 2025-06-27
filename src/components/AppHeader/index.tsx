import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { menuItems } from "../../constants";
import type { IMenuItem } from "../../types/models";
import "./AppHeader.scss";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const AppHeader = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = !screens.md;

  return (
    <Header className="header">
      {isMobile ? (
        <>
          <Button
            type="text"
            icon={<MenuOutlined className="menuIcon" />}
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="left"
            closable={false}
            className="drawer"
            bodyStyle={{ padding: 0 }}
          >
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setDrawerOpen(false)}
              className="closeButton"
            />
            <div className="drawerContent">
              {menuItems.map((item: IMenuItem) => (
                <NavLink
                  key={item.key}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  className={`link ${
                    location.pathname === item.path ? "linkActive" : ""
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </Drawer>
        </>
      ) : (
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[location.pathname]}
          items={menuItems.map((item: IMenuItem) => ({
            key: item.key,
            label: <NavLink to={item.path}>{item.label}</NavLink>,
          }))}
          className="desktopMenu"
        />
      )}
    </Header>
  );
};

export default AppHeader;
