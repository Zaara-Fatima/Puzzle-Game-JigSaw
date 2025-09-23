import React from 'react';

export const PlayButton = ({onClick}) => {
  return (
    <div className="flex flex-col justify-center items-center p-0 m-0 md:static absolute bottom-[200px]" onClick={onClick}>
    <div className="flex flex-col justify-center w-[80px] h-[70px] items-center circle1 bg-[#699C78] border-1 border-[#308549] rounded-full drop-shadow-[#308549] drop-shadow-xl ">
        <div className="flex flex-col justify-center w-[63px] h-[53px] items-center circle2 inset-ring-[#C5AC4F] inset-ring-1 border-[#C5AC4F] border-1 bg-[#DCCE99] rounded-full ">
            <div className="triangle w-0 h-0 border-t-[15px] border-b-[15px] border-l-[25px] ml-2 border-t-transparent border-b-transparent  border-l-[#308549] cursor-pointer"></div>
        </div>
    </div>
    </div>
  )
};
