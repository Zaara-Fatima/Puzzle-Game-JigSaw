import PuzzleTile from "./PuzzleTile";

export default function TileTray({ availableTiles, imageSrc, gridSize }) {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(60px,1fr))] w-full h-full  gap-2 p-4 overflow-y-auto ">
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
