import React, { useState } from "react";
import { Layout } from "antd";

import SiderMenus from "./components/sider";
import HomeScreen from "../HomeScreen";
import OrderScreen from "../ OrdersScreen";
import HeaderMenu from "./components/HeaderMenu";
const { Content } = Layout;

const Dashboard = () => {
  const [currentDisplay, setCurrentDisplay] = useState(<OrderScreen />);

  const onMenuChange = (menuParams) => {
    console.log(typeof menuParams.key);
    switch (+menuParams.key) {
      case 1:
        setCurrentDisplay(<HomeScreen />);
        break;
      case 2:
        setCurrentDisplay(<OrderScreen />);
        break;
      case 3:
        setCurrentDisplay(<div>menus</div>);
        break;
      case 4:
        setCurrentDisplay(<div>Invoices</div>);
        break;
      case 5:
        setCurrentDisplay(<div>Review</div>);
        break;
      case 6:
        setCurrentDisplay(<div>Settings</div>);
        break;
      case 7:
        setCurrentDisplay(<div>Logout</div>);
        break;
      default:
        setCurrentDisplay(<div>Home</div>);
    }
  };

  return (
    <>
      <Layout>
        <SiderMenus onMenuChange={onMenuChange} />
        <Content>
          <HeaderMenu />
          {currentDisplay}
        </Content>
      </Layout>
    </>
  );
};

export default Dashboard;
