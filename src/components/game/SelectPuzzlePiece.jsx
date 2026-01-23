import React from "react";

export const SelectPuzzlePiece = ({ className, text, children, margin }) => {
  return (
    <div
      className={`relative flex flex-col bg-[#699C78] rounded-xl ${className}`}
    >
      {/* Heading */}
      <div
        className={`sticky top-0 text-[1.5em] font-bold text-white z-20 rounded-xl bg-[#699C78] py-4 text-center ${margin}`}
      >
        {text}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
