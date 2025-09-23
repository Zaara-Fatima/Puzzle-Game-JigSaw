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
        className="flex flex-col items-center justify-center h-screen  bg-[#7DC383] text-center"
        style={{
          backgroundColor: "#7dc383",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
          backgroundRepeat: "repeat",
        }}
      >
        <div>
          <SelectPuzzlePiece
            text="Select Your Puzzle"
            className1="md:min-w-[900px] md:min-h-[550px] min-w-[400px] min-h-[600px]"
            className="relative max-w-"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
          <SelectPuzzlePiece
            text="Default Puzzles:"
            className1="md:min-w-[200px] md:min-h-[150px] min-w-[150px] min-h-[50px]"
            className="absolute z-10 top-[100px] md:left-[300px] left-[30px]"
          />
          </div>
          <div className="flex flex-row  md:gap-15 gap-4 justify-center items-center absolute top-[200px] z-10 ">
            {defaultImages.map((puzzle, i) => {
              return (
                <PuzzleImgPrev
                  key={i}
                  src={puzzle}
                  className1="md:max-w-[110px] md:max-h-[110px]  max-w-[80px] ring-2 ring-black/20"
                  className2="rounded-2xl  bg-[#DCCE99] flex justify-center items-center"
                  onClick={() => handleClick(puzzle)}
                />
              );
            })}
          </div>
          <div>
          <SelectPuzzlePiece
            text="Uploaded Puzzles:"
            className1="md:min-w-[200px] md:min-h-[150px] min-w-[200px] min-h-[50px]"
            className="absolute z-10 md:bottom-[170px] bottom-[250px] md:left-[300px] left-[20px]"
          />
          </div>
          <div className="flex flex-row  md:gap-15 gap-4 justify-center items-center absolute z-10 bottom-[110px]">
            {defaultImages.map((puzzle, i) => {
              return (
                <PuzzleImgPrev
                  key={i}
                  src={puzzle}
                  className1="md:max-w-[110px] md:max-h-[110px] max-w-[80px] ring-2 ring-black/20 "
                  className2="rounded-2xl  bg-[#DCCE99]  flex justify-center items-center"
                  onClick={() => handleClick(puzzle)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
