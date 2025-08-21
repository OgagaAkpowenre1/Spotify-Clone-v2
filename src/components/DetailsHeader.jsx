import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const songKey = Object.keys(songData?.resources?.["shazam-songs"] || {})[0];
  const songArtwork =
    songKey &&
    songData.resources["shazam-songs"][songKey].attributes.artwork.url;
  const shazamSongs = songData?.resources["shazam-songs"][songKey].attributes;

  const songAttributes = songKey
    ? songData.resources["shazam-songs"][songKey].attributes
    : null;

  const artistIdFromSong = songKey
    ? songData.resources["shazam-songs"][songKey].relationships.artists.data[0]
        .id
    : null;
  const artistNameFromSong = artistIdFromSong
    ? songData.resources["artists"][artistIdFromSong]?.attributes?.name
    : "Unknown Artist";

  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artist?.artwork?.url
                  ?.replace("{w}", "500")
                  .replace("{h}", "500")
              : songArtwork
          }
          alt="Art"
          className="sm:w-48 sm:h-48 w-28 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songAttributes?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${artistIdFromSong}`}>
              <p className="text-base text-gray-300 mt-2">
                {artistNameFromSong}
              </p>
            </Link>
          )}

          <p className="text-base text-gray-300 mt-2">
            {shazamSongs?.genres.primary}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
