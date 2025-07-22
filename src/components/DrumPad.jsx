import React, { useEffect } from 'react';

function DrumPad({ keyTrigger, clipId, clip, updateDisplay }) {
  const playSound = () => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
    updateDisplay(clipId);
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <div
      className="drum-pad text-center p-4 m-2 bg-[#808080] font-bold text-xl text-black cursor-pointer"
      id={clipId}
      onClick={playSound}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={clip} />
    </div>
  );
}

export default DrumPad;
