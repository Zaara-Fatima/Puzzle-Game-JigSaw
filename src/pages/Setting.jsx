import React from 'react'
import { BacktoHome } from '../components/settings/BacktoHome';
import { SoundEL } from '../components/settings/SoundEL';
import { useNavigate, } from 'react-router-dom';


export const Setting = () => {
  const navigate= useNavigate();
    return (
      <div>
      <div className="flex flex-col items-center justify-center h-screen  bg-[#7DC383] text-center"
       style={{
      backgroundColor: '#7dc383',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
      backgroundRepeat: 'repeat',
    }}
  
  >
      <BacktoHome onClick={() => navigate("/")}/>
      <SoundEL/>
      </div>
      </div>
    );
}
