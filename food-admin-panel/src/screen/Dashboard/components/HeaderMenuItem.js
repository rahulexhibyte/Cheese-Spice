import React from "react";
import { IconContext } from "react-icons";

const HeaderMenuItem = (props) => {
  const { icon, title, value, bgColor } = props;
  return (
    <>
      <div className="flex flex-row pl-5">
        <span className={`${bgColor} p-3 rounded-full`}>
          <IconContext.Provider value={{ size: "1.4rem", color: "white" }}>
            {icon}
          </IconContext.Provider>
        </span>
        <div className="flex flex-col pl-2 text-gray-500 font-bold">
          <span>{title}</span>
          <span className="text-black">{value}</span>
        </div>
      </div>
    </>
  );
};

export default HeaderMenuItem;
