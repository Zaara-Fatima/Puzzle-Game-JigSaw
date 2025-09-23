import React from "react";

export const SelectPuzzlePiece = ({ className ,text, width, height,className1}) => {
  return (
    <div className={className}>
      <div className="flex flex-col bg-[#699C78] justify-center items-center relative rounded-xl" >
        <div className="text-[20px] font-bold text-white absolute z-10 top-[20px]">
          {text}
        </div>
        <div className={className1} ></div>
      </div>
    </div>
  );
};
