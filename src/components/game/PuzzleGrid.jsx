// src/components/game/PuzzleGrid.jsx
// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { defaultSounds } from "../../assets/assets";
import GridCell from "./GridCell";
// import { Shuffle } from "../../assets/icons/shuffle";
import TileTray from "./TileTray";

export default function PuzzleGrid({
  imageSrc,
  gridSize = 3,
  board,
  setBoard,
  availableTiles,
  setAvailableTiles,
}) {
  const audioRef = useRef(null);
  const [hasPlayedWinSound, setHasPlayedWinSound] = useState(false);

  // const totalTiles = gridSize * gridSize;
  // const [board, setBoard] = useState(Array(gridSize * gridSize).fill(null));

  // function shuffle(array) {
  //   const copy = [...array];
  //   for (let i = copy.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [copy[i], copy[j]] = [copy[j], copy[i]];
  //   }
  //   return copy;
  // }

  // const [availableTiles, setAvailableTiles] = useState(
  //   shuffle(Array.from({ length: totalTiles }, (_, i) => i))
  // );
  // const [placedTiles, setPlacedTiles] = useState(Array(totalTiles).fill(null));

  function handleDrop(tileIndex, targetCellIndex) {
    // Prevent overwriting an existing tile
    if (board[targetCellIndex] !== null) return;

    const newBoard = [...board];

    // Remove tile from its old position
    const oldIndex = newBoard.findIndex((index) => index === tileIndex);
    if (oldIndex !== -1) newBoard[oldIndex] = null;

    // Place tile in new position
    newBoard[targetCellIndex] = tileIndex;
    setBoard(newBoard);

    // Remove from tray if it came from there
    const wasInTray = availableTiles.includes(tileIndex);
    if (wasInTray) {
      setAvailableTiles((prev) => prev.filter((index) => index !== tileIndex));
    }
  }

  function playifWins() {
    if (!audioRef.current) return;
    audioRef.current.play();

    setTimeout(() => {
      audioRef.current.pause();
    }, 4000);
  }

  //   function handleShuffle() {
  //   setAvailableTiles(shuffle(availableTiles));
  // }
  const isSolved = board.every((val, i) => val === i);

  useEffect(() => {
    if (isSolved && !hasPlayedWinSound) {
      playifWins();
      setHasPlayedWinSound(true);
    }
  }, [isSolved, hasPlayedWinSound]);

    let width,height;
  if(gridSize==3){
    width=300;
    height=300;
    
  }else if(gridSize==4){
      width=400;
     height=400;
    
  }

  return (
    <div className="relative flex flex-row justify-center items-center ">
      {/* < Shuffle onShuffle={()=>handleShuffle()}/> */}
      <div
        className="grid  rounded"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridAutoRows: `1fr`,
        }}
      >
        {board.map((tile, i) => (
          <GridCell
            key={i}
            cellIndex={i}
            placedTile={tile}
            imageSrc={imageSrc}
            gridSize={gridSize}
            onDrop={handleDrop}
          />
        ))}
      </div>
      <TileTray
        availableTiles={availableTiles}
        imageSrc={imageSrc}
        gridSize={gridSize}
      />
      {isSolved && (
        <div>
          <audio ref={audioRef} src={defaultSounds[0]} />

          <div className="absolute top-0 left-0 w-full h-[60px] bg-[#699C78] bg-opacity-70 flex items-center justify-center text-white text-2xl font-bold">
            🎉 Puzzle Solved!
          </div>
        </div>
      )}
    </div>
  );
}
