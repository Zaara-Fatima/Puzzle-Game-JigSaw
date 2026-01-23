// src/components/game/PuzzleTile.jsx
import { useDrag } from 'react-dnd';

export default function PuzzleTile({ index, imageSrc, gridSize, isDraggable = true }) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;

  const backgroundStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: `${gridSize * 100}%`,
    backgroundPosition: `${(col / (gridSize - 1)) * 100}%  ${(row / (gridSize - 1)) * 100}%`,
  };

//   (0%,0%)     (50%,0%)     (100%,0%)
// (0%,50%)    (50%,50%)    (100%,50%)
// (0%,100%)   (50%,100%)   (100%,100%)


  const [{ isDragging }, dragRef] = useDrag({
    type: 'tile',
    item: { tileIndex: index },
    canDrag: isDraggable,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className=" cursor-move transition-opacity"
      style={{
        width: '100%',
        height: '100%',
        opacity: isDragging ? 0.5 : 1,
        ...backgroundStyle,
      }}
    />
  );
}
