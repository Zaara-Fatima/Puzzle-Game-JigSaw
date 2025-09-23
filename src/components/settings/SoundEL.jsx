import React, { useState } from 'react';
import { Icon } from "../game/Icons.jsx";
import { Soundonicon } from '../../assets/icons/SoundonIcon.jsx';
import {Soundofficon } from '../../assets/icons/Soundofficon.jsx'

export const SoundEL = () => {
  const [off, setoff] = useState(false);
  console.log(off);

  function handleClick() {
    console.log("worrking")
    setoff(prev => !prev);
    console.log(off);
  }

  function iconRender() {
    console.log("woooooorrrrkinnn");
    console.log(off);
    return off ?<Soundofficon /> : <Soundonicon />;
    
  }

  return (
    <div onClick={handleClick}>
      <Icon svg={iconRender()} />
    </div>
  );
}