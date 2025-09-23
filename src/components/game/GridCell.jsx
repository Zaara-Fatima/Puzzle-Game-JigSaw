// src/components/game/GridCell.jsx
import { useDrop } from 'react-dnd';
import PuzzleTile from './PuzzleTile';

export default function GridCell({ cellIndex, placedTile, imageSrc, gridSize, onDrop }) {
  const [, dropRef] = useDrop({
    accept: 'tile',
    drop: (item) => {
      onDrop(item.tileIndex, cellIndex);
    },
  });

  let width,height;
  if(gridSize==3){
    width=300;
    height=300;
    
  }else if(gridSize==4){
      width=400;
     height=400;
    
  }

  return (
    <div
      ref={dropRef}
      className="border border-white bg-gray-700 flex items-center justify-center"
      style={{ width: `${width/ gridSize}%`, height: `${height / gridSize}%` }}
    >
      {placedTile !== null && (
        <PuzzleTile
          index={placedTile}
          imageSrc={imageSrc}
          gridSize={gridSize}
          // isStatic={true}// disables dragging
          isDraggable={true}

        />
      )}
    </div>
  );
}