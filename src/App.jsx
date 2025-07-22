import { useState } from 'react';
import './App.css';
import { audioClips } from './assets/audio';
import DrumPad from './components/DrumPad';

function App() {
  const [display, setDisplay] = useState('Press a pad');

  const updateDisplay = (name) => {
    setDisplay(name);
  };

  return (
    <div
      id="drum-machine"
      className="min-h-screen bg-[#8d8d8d] text-black flex items-center justify-center"
    >
      <div className="bg-[#b3b3b3] min-w-[400px] p-8 border-[#ffa500] border-6 shadow-lg">
        <h2 className="text-3xl mb-8 text-center font-bold">Drum Machine</h2>
        <div
          id="display"
          className="mb-6 text-center text-lg font-bold bg-[#808080] p-2"
        >
          {display}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {audioClips.map((clip) => (
            <DrumPad
              key={clip.keyTrigger}
              {...clip}
              updateDisplay={updateDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
