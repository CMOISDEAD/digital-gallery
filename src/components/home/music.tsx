import { CircleButton } from "@/components/ui/circlebutton";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const songs = ["song 1.mp3"];

export const Music = () => {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play();
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  return (
    <>
      {!isPlaying ? (
        <CircleButton onClick={handlePlay}>
          <Play />
        </CircleButton>
      ) : (
        <CircleButton onClick={handleMute}>
          {muted ? <VolumeX /> : <Volume2 />}
        </CircleButton>
      )}

      <audio ref={audioRef} autoPlay loop>
        {songs.map((song) => (
          <source key={song} src={`music/${song}`} type="audio/mpeg" />
        ))}
      </audio>
    </>
  );
};
