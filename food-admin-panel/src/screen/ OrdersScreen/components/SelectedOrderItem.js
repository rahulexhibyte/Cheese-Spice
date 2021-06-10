import React from "react";
import OrderStatus from "./OrderStatus";

const SelectedOrderItem = (props) => {
  const { customerName, address, orderMenu, orderStatus } = props.orderItem;
  // eslint-disable-next-line default-case
  return (
    <>
      <div>
        <div className="text-xl font-bold">Order Detail</div>
        <div className="font-bold m-5">{customerName}</div>
        <div className="font-bold ml-5 my-2">{address}</div>
        <div className="mt-5">
          <span className="font-bold">Items</span>
          <div className="mt-3">
            <div className="flex justify-between mx-10 my-5">
              <span>Veg Pizza</span>
              <span>2 Items</span>
            </div>
            <div className="flex justify-between mx-10 my-5">
              <span>Margeritta Pizza</span>
              <span>1 Item</span>
            </div>
            <div className="flex justify-between mx-10 my-5">
              <span>Thincrust Pizza</span>
              <span>2 Items</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <span className="font-bold">Progress</span>
          <div className="mt-3">
            <div className="flex justify-between mx-10 my-5">
              <span className="font-bold">Order Status</span>
              <OrderStatus orderStatus={orderStatus} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedOrderItem;
