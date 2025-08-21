import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related songs</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, index) => (
        <SongBar key={song?.key} />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
