import React, { useState } from "react";
import { Header } from "../components/game/Header";
import { PuzzlePreview } from "../components/game/PuzzlePreview";
import { Icon } from "../components/game/Icons";
import { SelectPuzzlePiece } from "../components/game/SelectPuzzlePiece";
import { defaultImages, defaultSvg } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import PuzzleGrid from "../components/game/PuzzleGrid";
import { SelectPuzzle } from "./SelectPuzzle";
import TileTray from "../components/game/TileTray";

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
        className="grid md:grid-cols-3 grid-rows-[auto] place-items-center w-full min-h-screen bg-[#7DC383] text-center"
        style={{
          backgroundColor: "#7dc383",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
          backgroundRepeat: "repeat",
        }}
      >
        <Header className="fixed top-[5%]" onClick={() => navigate("/setting")} />

        
        <div className="md:col-span-2 mt-20 ">
        <PuzzlePreview className="bg-[#DCCE99] md:w-[50vw] w-[65vw] md:h-[58vh] h-[40vh] rounded-xl relative shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] place-content-center-safe flex flex-col gap-4" >
           <div className="flex gap-4 justify-center items-center md:ml-30 ml-20 relative">
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
                className=" rounded-full bg-[#699C78]  w-[20px]  md:w-[2vw] md:h-[2vw] p-1 z-20 text-white"
                svg={<Svg onClick={onClickHandler} />}
              />
            );
          })}
          </div>
        
        
        {!selectedPuzzle ? (
          <div className="sticky z-10">No Puzzle Selected please Select a puzzle</div>
        ) : (
          <div className=" z-10 ">
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
        </PuzzlePreview>
        </div>
        <div>
        <SelectPuzzlePiece
          className="md:w-[30vw] w-[70vw] md:h-[45vh] h-[40vh] md:mr-4"
          text="Select Puzzle Pieces"
         >
          {selectedPuzzle? ( <TileTray
                  availableTiles={availableTiles}
                  imageSrc={selectedPuzzle}
                  gridSize={gridSize}
                />):( <h1 className="font-bold text-white z-10">Please Select a Puzzle</h1>)}
          
          </SelectPuzzlePiece>
        </div>
      </div>
    </div>
  );
};
