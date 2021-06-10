import React from "react";

const OrderStatus = (props) => {
  let color = "";
  // eslint-disable-next-line default-case
  switch (props.orderStatus) {
    case "Pending":
      color = "bg-red-300 text-red-700";
      break;
    case "Preparing":
      color = "bg-pink-300 text-pink-700";
      break;
    case "Delievering":
      color = "bg-blue-300 text-blue-700";
      break;
    case "Completed":
      color = "bg-green-300 text-green-700";
      break;
  }
  return (
    <>
      <span
        className={`${color} w-32 text-center font-bold py-1 px-4 bg-opacity-50 rounded-full`}
      >
        {props.orderStatus}
      </span>
    </>
  );
};

export default OrderStatus;
