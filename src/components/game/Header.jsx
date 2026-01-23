import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({onClick, className}) => {
  const navigate= useNavigate();
  return (
    <div className={` grid grid-cols-2  w-full ${className}`}>
      <div className="arya-regular  text-[min(8vw,2.5rem)] text-[white] justify-self-end">
        PUZZLE GAME
      </div>
      <div className="justify-self-end pr-[10%]">
      <div className="hamburger flex flex-col justify-between  h-[2vh] w-[4vh] gap-0 " onClick={onClick}>
          <div className="bg-white p-0 m-0 h-[2px]"></div>
          <div className="bg-white p-0 m-0 h-[2px]"></div>
          <div className="bg-white p-0 m-0 h-[2px]"></div>
      </div>
      </div>
    </div>
  );
};
