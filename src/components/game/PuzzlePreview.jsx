import React from "react";

export const PuzzlePreview = ({className, children}) => {
  return (
    <div>
      <div className={className}>{children}</div>
    </div>
  );
};
