import React from "react";
import { defaultIcons } from "../../assets/assets";

export const GameTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={defaultIcons[0]} alt="polygon" className="w-[700px] h-[200px] p-0  m-0"></img>
      <div className="md:bottom-[80px] bottom-[100px] relative architects-daughter-regular text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-[23px] text-[20px] font-extrabold ">WELCOME TO THE GHIBLI JIGSAW PUZZLE</div>
    </div>
  );
};
