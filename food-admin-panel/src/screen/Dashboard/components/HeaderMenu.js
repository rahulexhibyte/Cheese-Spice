import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";
import HeaderMenuItem from "./HeaderMenuItem";
const HeaderMenu = (props) => {
  return (
    <div className="flex flex-row pr-10 pt-5 justify-end">
      <HeaderMenuItem
        icon={<HiShoppingCart />}
        title="Food Delievered"
        value="1200"
        bgColor="bg-blue-400"
      />
      <HeaderMenuItem
        icon={<AiTwotoneStar />}
        title="Satisfaction Rating"
        value="98%"
        bgColor="bg-green-400"
      />
      <HeaderMenuItem
        icon={<IoMdWallet />}
        title="Your Balance"
        value="INR 25,000"
        bgColor="bg-yellow-600"
      />
    </div>
  );
};

export default HeaderMenu;
