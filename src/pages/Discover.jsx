import { useDispatch, useSelector } from "react-redux";
import { Error, SongCard, Loader } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player)
  const genreTitle = "Pop";
  const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return (<Loader title="Loading songs..." />);

    if (error) return (<Error />);

  console.log(activeSong);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center flex-col mt-4 mb-10 sm:flex-row ">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value={""}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
            {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

        {/* Song Wrapper */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard key={index} i={index} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} />
        ))}

      </div>
    </div>
  );
};

export default Discover;
