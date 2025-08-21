import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  //useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails, error } =
    useGetSongDetailsQuery({ songid });

//   const {
//     data,
//     isFetching: isFetchingRelatedSongs,
//     error,
//   } = useGetSongRelatedQuery({ songid });

  if ( isFetchingSongDetails)
    return <Loader title="Searching song details..." />;

  if (error) return <Error />;

  const songId = Object.keys(songData?.resources?.songs || {})[0];
  const songAttributes = songId
    ? songData.resources.songs[songId].attributes
    : {};

  const lyricsId = Object.keys(songData?.resources?.lyrics || {})[0];
  const lyrics = lyricsId
    ? songData.resources.lyrics[lyricsId].attributes.text
    : [];

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, i: index }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col ">
      <DetailsHeader artistId={""} songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {songAttributes?.hasLyrics && lyrics.length > 0 ? (
            lyrics.map((line, index) => (
              <p className="text-gray-400 text-base my-1" key={index}>
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">No lyrics found</p>
          )}
        </div>
      </div>

      {/* Related songs */}
      {/* <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}
    </div>
  );
};

export default SongDetails;
