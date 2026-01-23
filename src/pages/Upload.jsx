import React from "react";
import { Header } from "../components/game/Header";
import { PuzzlePreview } from "../components/game/PuzzlePreview";
import { Icon } from "../components/game/Icons";
import { SelectPuzzlePiece } from "../components/game/SelectPuzzlePiece";
import { useNavigate } from "react-router-dom";
import { defaultImages } from "../assets/assets";
import { PuzzleImgPrev } from "../components/select/PuzzleImgPrev";

export const Upload = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className=" grid md:grid-cols-3 grid-rows-2  w-full h-[100vh] bg-[#7DC383] text-center"
        style={{
          backgroundColor: "#7dc383",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
          backgroundRepeat: "repeat",
        }}
      >
        <Header onClick={() => navigate("/setting")} className="fixed top-[5%]"/>
        <div className="md:col-span-2 ">
        <div className="grid place-items-center w-full h-[100vh]">
          <PuzzlePreview className="bg-[#DCCE99] md:w-[55vw] w-[70vw]  md:h-[50vh]  h-[30vh]  rounded-xl md:mt-[3rem] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] "  />
          <div className="xl:fixed md:fixed md:bottom-[20em] z-10 flex flex-col relative bottom-[20rem] items-center justify-center gap-4 ">
          <Icon
            className=" text-white"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-15"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>
            }
          />
          <h6 className=" text-white font-bold text-[min(4rem,0.7rem)]  text-center">
            Upload your image (JPG,PNG)<br/> max-size:10mb
          </h6>
          </div>
          
        </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center relative items-center md:row-span-2">
        <SelectPuzzlePiece
          className="md:w-[30vw] w-[70vw] md:h-[50vh] h-[45vh] fixed md:mt-[3rem] mt-[-3rem] md:mr-[2rem]"
          text="Select Puzzle"
          
        />
        <div className="flex fixed md:flex-col justify-center items-center md:mt-[4rem] mt-[-8rem] md:mr-[2rem] gap-[2rem] z-10 w-">
        
        <div className="flex flex-col justify-center items-center">
          <div className="text-white font-bold text-[18px] ">Default:</div>
          <PuzzleImgPrev
            src={defaultImages[1]}
            className1="md:w-[8vw] max-w-[15vw] h-[10vh] shadow-3xl ring-2 ring-black/20"
            className2=""
            onClick={() => navigate("/select")}
          />
        </div>
        
        <div className="flex flex-col justify-center items-center ">
          <div className="text-white font-bold text-[18px] ">Uploaded:</div>
          <PuzzleImgPrev
            src={defaultImages[1]}
            className1="md:w-[8vw] max-w-[15vw] h-[10vh] ring-2 ring-black/20 "
            className2=""
            onClick={() => navigate("/select")}
          />
        </div>
      </div> 
      </div>
      </div>
    </div>
   
  );
};
