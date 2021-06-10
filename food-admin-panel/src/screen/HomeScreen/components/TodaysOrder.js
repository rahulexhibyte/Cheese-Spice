import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const TodaysOrder = () => {
  return (
    <>
      <div className="text-center flex justify-center">
        <div className="w-1/3 bg-white rounded-xl flex justify-between items-center shadow-xl hover:shadow-2xl p-5 cursor-pointer">
          <div className="flex justify-between items-center">
            <span className="bg-black text-white font-extrabold p-3 rounded-xl ">
              25
            </span>
            <span className="font-bold ml-3">New Orders</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Manage Orders</span>
            <span className="text-2xl ml-3">
              <GrFormNextLink />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodaysOrder;
