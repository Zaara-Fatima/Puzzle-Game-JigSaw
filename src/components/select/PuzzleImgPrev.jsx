import React from 'react'

export const PuzzleImgPrev = ({src,  className1, className2, onClick}) => {
  return (
    <div className={className2} ><img src={src} className={className1} onClick={onClick}></img></div>
  )
}
