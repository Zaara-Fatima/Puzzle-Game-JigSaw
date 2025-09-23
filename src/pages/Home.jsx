import { useNavigate } from 'react-router-dom';
import { PlayButton } from  '../components/homePage/PlayButton.jsx'
import { GameTitle } from '../components/homePage/GameTitle.jsx';
import { Upload } from './Upload.jsx';


export const Home =()=> {
  const navigate = useNavigate();

  return (
    <div>
    <div className="flex flex-col items-center justify-center h-screen  bg-[#7DC383] text-center"
     style={{
    backgroundColor: '#7dc383',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
    backgroundRepeat: 'repeat',
  }}

>
      <GameTitle/>
      <PlayButton onClick={() => navigate('/upload')} />
    </div>
    </div>
  );
}



