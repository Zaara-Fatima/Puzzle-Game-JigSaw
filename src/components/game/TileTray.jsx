import { useDrop } from "react-dnd";
import PuzzleTile from "./PuzzleTile";

export default function TileTray({ availableTiles, imageSrc, gridSize, setAvailableTiles, setBoard }) {
  const [,dropRef]=useDrop({
    accept:'tile',
    drop:(item)=>{
      const tileIndex= item.tileIndex;

      setBoard((prev)=>
        prev.map((cell)=>cell===tileIndex?null:cell)
      );

      setAvailableTiles((prev)=>prev.includes(tileIndex)?prev:[...prev, tileIndex])
    }
  })

  return (
    <div ref={dropRef} className="grid grid-cols-4 gap-4 place-items-center overflow-y-auto">
  {availableTiles.map((tileIndex) => (
    <div
      key={tileIndex}
      className="aspect-square w-[50px] md:w-[70px] lg:w-[80px]"
    >
      <PuzzleTile
        index={tileIndex}
        imageSrc={imageSrc}
        gridSize={gridSize}
      />
    </div>
  ))}
</div>
  );
}

// grid grid-cols-[repeat(4,minmax(60px,1fr))] w-full h-full  gap-2 p-4 overflow-y-auto 
