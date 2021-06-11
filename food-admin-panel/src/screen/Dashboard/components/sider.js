import React from "react";
import { Layout, Menu, Divider } from "antd";
import { IconContext } from "react-icons";
import { AiOutlineComment } from "react-icons/ai";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiFoodMenu, BiLogOutCircle } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import globalConstants from "../../../constants";

const { Sider } = Layout;

const SiderMenus = (props) => {
  return (
    <>
      <Sider
        theme="light"
        style={{
          height: "100vh",
          left: 0,
          overflow: "auto",
        }}
      >
        <div className="text-xl text-center font-bold m-5">
          {globalConstants.appName}
        </div>
        <Menu
          theme="light"
          className="font-bold"
          mode="inline"
          onClick={props.onMenuChange}
          defaultSelectedKeys="2"
        >
          <Menu.Item
            key="1"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <FiHome />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.homeMenu}</span>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <FiShoppingCart />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.orderMenu}</span>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <IoFastFoodOutline />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.menuMenu}</span>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <BiFoodMenu />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.invoiceMenu}</span>
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <AiOutlineComment />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.reviewMenu}</span>
          </Menu.Item>
          <Divider />
          <Menu.Item
            key="6"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <VscSettings />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.settingsMenu}</span>
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={
              <IconContext.Provider value={{ size: "1.4em" }}>
                <BiLogOutCircle />
              </IconContext.Provider>
            }
          >
            <span className="pl-3">{globalConstants.menus.logout}</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SiderMenus;
