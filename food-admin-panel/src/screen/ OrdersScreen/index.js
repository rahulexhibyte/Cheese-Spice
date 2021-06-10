import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import OrdersItem from "./components/OrdersItem";
import SelectedOrderItem from "./components/SelectedOrderItem";
const OrderScreen = () => {
  const [selectedOrderItem, setSelecteOrderItem] = useState({
    customerName: "Tushar Vadodariya",
    address: "25, Shraddha,Katargam",
    orderMenu: "Dry Manchurian",
    orderStatus: "Preparing",
  });

  const onselectedChange = (orderItem) => {
    setSelecteOrderItem(orderItem);
  };
  return (
    <>
      <div className="text-2xl font-bold m-5">Food Order</div>
      <Row className="">
        <Col flex={4}>
          <div className="flex justify-around m-5 px-8">
            <span className="flex-1">Customer</span>
            <span className="flex-1">Address</span>
            <span className="flex-1">Menu</span>
            <span>Status</span>
          </div>
          <Divider />
          <OrdersItem
            customerName="Tushar Vadodariya"
            address="25, Shraddha,Katargam"
            orderMenu="Dry Manchurian"
            orderStatus="Preparing"
            onChange={onselectedChange}
          />
          <Divider />
          <OrdersItem
            customerName="Rahul Rathod"
            address="41, Shraddha,Katargam"
            orderMenu="Veg. Pizza"
            orderStatus="Completed"
            onChange={onselectedChange}
          />
          <Divider />
          <OrdersItem
            customerName="Sakshi Vaghasiya"
            address="26,Shivanjali,Mota Varachha"
            orderMenu="Paneer Cheese Pizza"
            orderStatus="Delievering"
            onChange={onselectedChange}
          />
          <Divider />
          <OrdersItem
            customerName="Harsh Rathod"
            address="41, Shraddha,Katargam"
            orderMenu="French Fries"
            orderStatus="Pending"
            onChange={onselectedChange}
          />
          <Divider />
          <OrdersItem
            customerName="Jaydeep Shingala"
            address="104/B, Shivalik Res.,Katargama"
            orderMenu="Italian Pizza"
            orderStatus="Preparing"
            onChange={onselectedChange}
          />
        </Col>
        <Col flex={2} className="p-5">
          {<SelectedOrderItem orderItem={selectedOrderItem} />}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
