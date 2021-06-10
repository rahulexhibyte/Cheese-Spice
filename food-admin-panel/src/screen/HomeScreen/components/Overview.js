import React from "react";
import { FaShoppingCart, FaRegSadTear } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoFastFood } from "react-icons/io5";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  return (
    <>
      <div className="text-2xl font-bold m-5">Overview</div>
      <div className="flex justify-start mt-5">
        <OverviewItem
          value="125"
          title="Total Foods"
          icon={<IoFastFood />}
          color="bg-pink-300"
        />
        <OverviewItem
          value="48"
          title="Total Orders"
          icon={<FaShoppingCart />}
          color="bg-green-300"
        />
        <OverviewItem
          value="43"
          title="Completed Orders"
          icon={<HiOutlineEmojiHappy />}
          color="bg-blue-300"
        />
        <OverviewItem
          value="5"
          title="Canceled Orders"
          icon={<FaRegSadTear />}
          color="bg-red-300"
        />
      </div>
    </>
  );
};

export default Overview;
