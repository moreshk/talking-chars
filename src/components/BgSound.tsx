import { useEffect, useRef, useState } from "react";
import sound from "../assets/sound.png";
import { useLocation } from "react-router";

type BgSoundProps = {
  audioUrl: string;
  path: string;
};

const BgSound = ({ audioUrl, path }: BgSoundProps) => {
  const audioRef = useRef<any>(null);
  const [playTheBg, setPlayTheBg] = useState(false);
  const location = useLocation();

  const playAudio = () => {
    const audioElement = new Audio(audioUrl);
    audioElement.volume = 0.1;
    audioElement.play();
    audioRef.current = audioElement;
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (location.pathname === path) {
      playAudio();
    }

    return () => {
      pauseAudio();
    };
  }, [location.pathname]);

  return (
    <div>
      <img
        src={sound}
        width={30}
        height={30}
        onClick={() => {
          if (playTheBg) {
            audioRef.current.play();
            setPlayTheBg(false);
          } else {
            audioRef.current.pause();
            setPlayTheBg(true);
          }
        }}
      />
    </div>
  );
};

export default BgSound;
