import PuzzleTile from "./PuzzleTile";

export default function TileTray({ availableTiles, imageSrc, gridSize }) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 absolute -right-[630px] top-[100px] h-[150px] w-[350px]">
      {availableTiles.map(tileIndex => (
        <PuzzleTile
          key={tileIndex}
          index={tileIndex}
          imageSrc={imageSrc}
          gridSize={gridSize}
        />
      ))}
    </div>
  );
}
