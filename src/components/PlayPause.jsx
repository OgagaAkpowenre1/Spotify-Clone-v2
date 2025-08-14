import { MdPauseCircle, MdPlayCircle } from "react-icons/md";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";

const PlayPause = ({ song, isPlaying, handlePause, handlePlay, activeSong }) =>
  isPlaying && activeSong?.id === song?.id ? (
    <BsPauseCircle size={35}
    className="text-gray-300"
    onClick={handlePause}
    />
  ) : (
    <BsPlayCircle size={35}
    className="text-gray-300"
    onClick={handlePlay}
    />
  );

export default PlayPause;
