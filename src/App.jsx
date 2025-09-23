import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Home} from './pages/Home.jsx';
import {Game } from './pages/Game.jsx';
import {Setting } from './pages/Setting.jsx';
import {SelectPuzzle} from './pages/SelectPuzzle.jsx';
import {Upload} from './pages/Upload.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>

    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/game"  element={<Game/>} />
        <Route path="/setting"  element={<Setting/>} />
        <Route path="/upload"  element={<Upload/>} />
        <Route path="/select"  element={<SelectPuzzle/>} />
      </Routes>
    </BrowserRouter>
    </DndProvider>

  );
}

export default App;
