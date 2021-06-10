import React from "react";
import OrderSummary from "./components/OrderSummery";
import Overview from "./components/Overview";
import TodaysOrder from "./components/TodaysOrder";

const HomeScreen = () => {
  return (
    <>
      <div className="m-5">
        <TodaysOrder />
        <Overview />
        <OrderSummary />
      </div>
    </>
  );
};

export default HomeScreen;
