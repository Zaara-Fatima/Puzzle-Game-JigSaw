import React, { useState } from "react";
import { Header } from "../components/game/Header";
import { PuzzlePreview } from "../components/game/PuzzlePreview";
import { Icon } from "../components/game/Icons";
import { SelectPuzzlePiece } from "../components/game/SelectPuzzlePiece";
import { defaultImages, defaultSvg } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import PuzzleGrid from "../components/game/PuzzleGrid";
import { SelectPuzzle } from "./SelectPuzzle";

export const Game = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPuzzle = location.state?.selectedPuzzle;
  const gridSize = 4;
  const totalTiles = gridSize * gridSize;
  const [board, setBoard] = useState(Array(gridSize * gridSize).fill(null));
  const [availableTiles, setAvailableTiles] = useState(
    shuffle(Array.from({ length: totalTiles }, (_, i) => i))
  );

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function handleShuffle() {
    console.log("caallinggg");
    setAvailableTiles(shuffle(availableTiles));
  }

  function handleRestart() {
     if (window.confirm("Are you sure you want to restart the puzzle?")) {
    setBoard(Array(totalTiles).fill(null));
    setAvailableTiles(shuffle(Array.from({ length: totalTiles }, (_, i) => i)));
  }

  }

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
        <div className="flex flex-row justify-between items-center top-[5px] absolute min-w-full ">
        <Header onClick={() => navigate("/setting")} />
        </div>
        <div className="flex gap-4 justify-center items-center  absolute top-[150px]  left-[700px]">
          {defaultSvg.map((Svg, i) => {
            console.log("Rendering icon:", Svg.name || Svg);
            let onClickHandler;

            if (i === defaultSvg.length - 1) {
              onClickHandler = handleShuffle;
            } else if (i === 1) {
              onClickHandler = handleRestart;
            }

            return (
              <Icon
                key={i}
                className=" rounded-full bg-[#699C78] w-[25px] h-[25px] p-1 z-10 text-white"
                svg={<Svg onClick={onClickHandler} />}
              />
            );
          })}
        </div>
        
        <div>
        <PuzzlePreview className="bg-[#DCCE99] w-[750px] h-[450px] rounded-xl absolute left-[100px] top-[125px] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)]" />
        {!selectedPuzzle ? (
          <div className="absolute z-10">No Puzzle Selected please Select a puzzle</div>
        ) : (
          <div className="absolute z-10 bg-[#699C78] left-[250px] top-[150px]">
            <PuzzleGrid
              imageSrc={selectedPuzzle}
              board={board}
              setBoard={setBoard}
              availableTiles={availableTiles}
              setAvailableTiles={setAvailableTiles}
              gridSize={gridSize}
            />
          </div>
        )}
        </div>
        <div>
        <SelectPuzzlePiece
          className="right-[75px] absolute top-[125px]"
          text="Select Puzzle Pieces"
          className1="w-[400px] h-[450px]"
        />
        </div>
      </div>
    </div>
  );
};
