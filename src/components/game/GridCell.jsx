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
    width=30;
    height=30;
    
  }else if(gridSize==4){
      width=40;
     height=40;
    
  }

  return (
    <div
      ref={dropRef}
      className="border border-white bg-gray-700 flex items-center justify-center aspect-square"
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
