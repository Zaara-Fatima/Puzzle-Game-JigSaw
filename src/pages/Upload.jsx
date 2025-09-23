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
        className="flex flex-col items-center justify-center relative h-screen  bg-[#7DC383] text-center"
        style={{
          backgroundColor: "#7dc383",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
          backgroundRepeat: "repeat",
        }}
      >
        <Header onClick={() => navigate("/setting")} />
        <div className="flex md:flex-row flex-col justify-center items-center absolute md:left-[445px] left-[190px] md:top-[300px] top-[160px]">
          <Icon
            className="  md:w-[25px] md:h-[25px] w-[10px] h-[10px]  z-10 text-white"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="md:size-20 size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>
            }
          />
          <h6 className="z-10 text-white absolute md:top-[100px] top-[50px] w-[450px] md:text-[15px] text-[10px] font-bold ml-10">
            Upload your image (JPG,PNG) max-size:10mb
          </h6>
        </div>

        <PuzzlePreview className="bg-[#DCCE99] md:w-[750px] w-[350px] md:h-[450px] h-[150px] rounded-xl absolute md:left-[100px] left-[40px] top-[125px] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)]" />
        <SelectPuzzlePiece
          className="md:right-[75px] absolute right-[40px] md:top-[127px] top-[350px] "
          text="Select Puzzle"
          className1="md:w-[400px] md:h-[450px] w-[350px] h-[260px]"
        />
        <div className="text-white font-bold text-[18px] md:top-[260px] top-[410px] md:right-[380px] right-[300px] absolute z-10">Default:</div>
        <div className=" absolute z-10 md:top-[300px] top-[450px] md:right-[330px] right-[250px]">
          <PuzzleImgPrev
            src={defaultImages[1]}
            className1="w-[100px] h-[100px] shadow-3xl ring-2 ring-black/20"
            className2="rounded-2xl  bg-[#DCCE99]  flex justify-center items-center "
            onClick={() => navigate("/select")}
          />
        </div>
        <div className="text-white font-bold text-[18px] md:top-[260px] top-[410px]  md:right-[155px] right-[100px] absolute z-10">Uploaded:</div>
        <div className=" absolute z-10 md:top-[300px] top-[450px] md:right-[110px] right-[90px] ">
          <PuzzleImgPrev
            src={defaultImages[1]}
            className1="w-[100px] h-[100px] ring-2 ring-black/20 "
            className2="rounded-2xl  bg-[#DCCE99] flex justify-center items-center"
            onClick={() => navigate("/select")}
          />
        </div>
      </div>
    </div>
  );
};
