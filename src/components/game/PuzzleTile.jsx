// src/components/game/PuzzleTile.jsx
import { useDrag } from 'react-dnd';

export default function PuzzleTile({ index, imageSrc, gridSize, isDraggable = true }) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;

  const backgroundStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: `${gridSize * 100}%`,
    backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${(row / (gridSize - 1)) * 100}%`,
  };

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
      className="border border-white cursor-move transition-opacity"
      style={{
        width: '100px',
        height: '100px',
        opacity: isDragging ? 0.5 : 1,
        ...backgroundStyle,
      }}
    />
  );
}