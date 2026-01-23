import React from "react";
import { SelectPuzzlePiece } from "../components/game/SelectPuzzlePiece";
import { PuzzleImgPrev } from "../components/select/PuzzleImgPrev";
import { defaultImages } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const SelectPuzzle = () => {
  const navigate = useNavigate();
  function handleClick(imgSrc) {
    navigate("/game", { state: { selectedPuzzle: imgSrc } });
  }
  return (
    <div>
      <div
        className="grid grid-rows-1 place-items-center-safe h-screen  bg-[#7DC383] text-center"
        style={{
          backgroundColor: "#7dc383",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
          backgroundRepeat: "repeat",
        }}
      >
        <div className="row-span-1">
          <SelectPuzzlePiece
            text="Select Your Puzzle"
            className="relative w-[65vw] max-w-[70vw] h-[70vh]"
          >
           <div className="flex flex-col gap-15 justify-center items-center puzzles">
          <div className="mb-[30px]">
          <h1 className="text-[1.5em] font-bold text-white  z-10">
            Default Puzzles:
          </h1>
         
          <div className="flex flex-row  md:gap-15 gap-4 justify-center items-center relative z-10 ">
            {defaultImages.map((puzzle, i) => {
              return (
                <PuzzleImgPrev
                  key={i}
                  src={puzzle}
                  className1="w-[clamp(64px,8vw,150px)]
  aspect-square ring-2 ring-black/20"
                  className2="rounded-2xl  bg-[#DCCE99] flex justify-center items-center"
                  onClick={() => handleClick(puzzle)}
                />
              );
            })}
          </div> 
          </div>
          <div>
          <h1 className="text-[1.5em] font-bold text-white  z-10">
            Uploaded Puzzles:
          </h1>
          
          <div className="flex flex-row  md:gap-15 gap-4 justify-center items-center relative z-10 ">
            {defaultImages.map((puzzle, i) => {
              return (
                <PuzzleImgPrev
                  key={i}
                  src={puzzle}
                  className1="w-[clamp(64px,8vw,150px)]
  aspect-square ring-2 ring-black/20"
                  className2="rounded-2xl  bg-[#DCCE99]  flex justify-center items-center"
                  onClick={() => handleClick(puzzle)}
                />
              );
            })}
          </div>
          </div>
        </div> 
          </SelectPuzzlePiece>
        </div>
        
      </div>
    </div>
  );
};
