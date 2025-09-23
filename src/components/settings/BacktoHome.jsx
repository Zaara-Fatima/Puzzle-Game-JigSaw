import React from 'react'
import { Icon } from "../game/Icons.jsx";
import { HomeIcon } from '../../assets/icons/HomeIcon';

export const BacktoHome = ({onClick}) => {
  return (
    <div onClick={onClick}><Icon svg={<HomeIcon/>} className="flex flex-col items-center justify-center w-[40px] h-[40px]" /></div>
  )
}
