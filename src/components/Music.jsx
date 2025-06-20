import { useRef, useState } from "react";
import LaPetiteFilleDeLaMer from "../assets/La_petite_fille_de_la_mer.mp3";
import MusicIcon from "../components/MusicIcon";

function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="music">
      <button onClick={toggleMusic}>
        <MusicIcon playing={playing} />
      </button>
      <audio ref={audioRef} src={LaPetiteFilleDeLaMer} loop />
    </div>
  );
}

export default Music;
