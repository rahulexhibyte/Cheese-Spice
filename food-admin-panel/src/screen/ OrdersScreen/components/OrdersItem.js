import React from "react";
import OrderStatus from "./OrderStatus";

const OrdersItem = (props) => {
  const { customerName, address, orderMenu, orderStatus, onChange } = props;

  const onChangeHandler = () => {
    onChange({
      customerName,
      address,
      orderMenu,
      orderStatus,
    });
  };
  // eslint-disable-next-line default-case
  return (
    <>
      <div
        className="flex justify-around m-5 cursor-pointer"
        onClick={onChangeHandler}
      >
        <span className="flex-1 font-bold">{customerName}</span>
        <span className="flex-1">{address}</span>
        <span className="flex-1">{orderMenu}</span>
        <OrderStatus orderStatus={orderStatus} />
      </div>
    </>
  );
};

export default OrdersItem;
