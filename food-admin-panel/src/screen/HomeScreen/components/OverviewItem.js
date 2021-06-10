import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const OverviewItem = (props) => {
  const { value, icon, title, color } = props;
  return (
    <>
      <div
        className={`${color} flex shadow-xl hover:shadow-2xl rounded-xl p-7 ml-10`}
      >
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{value}</span>
          <span className="font-bold mt-2">{title}</span>
        </div>

        <span
          className={`my-auto ml-5 p-5 text-2xl rounded-full bg-opacity-50 ${color}`}
        >
          {icon}
        </span>
      </div>
    </>
  );
};

export default OverviewItem;
