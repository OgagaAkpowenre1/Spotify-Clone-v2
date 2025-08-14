import { Error, SongCard, Loader } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const genreTitle = "Pop";
  const { data, isFetching, error } = useGetTopChartsQuery();

  console.log(data);

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
        {Array.from({ length: 10 }).map((song, index) => (
          <SongCard key={index} i={index} song={song} />
        ))}

      </div>
    </div>
  );
};

export default Discover;
