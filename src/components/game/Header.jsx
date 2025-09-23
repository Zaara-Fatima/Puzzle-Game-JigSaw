import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({onClick}) => {
  const navigate= useNavigate();
  return (
    <div className="flex flex-row justify-between items-center top-[20px] absolute w-full md:px-20">
      <div className="arya-regular md:text-[40px] text-[30px] text-[white] relative md:left-[500px] left-[70px]">
        PUZZLE GAME
      </div>
      <div className="hamburger flex flex-col justify-between md:h-4 md:w-6 h-3 w-5 gap-0 absolute left-[20px] md:static" onClick={onClick}>
          <div className="bg-white p-0 m-0 h-[2px]"></div>
          <div className="bg-white p-0 m-0 h-[2px]"></div>
          <div className="bg-white p-0 m-0 h-[2px]"></div>
      </div>
    </div>
  );
};
