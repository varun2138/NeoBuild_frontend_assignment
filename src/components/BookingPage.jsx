import React, { useState } from "react";

import Selection from "./Selection";
import { movies } from "../utils/moviesInfo";
import SearchBar from "./SearchBar";
import { ImSad2 } from "react-icons/im";
import { useGlobal } from "../context/Context";

const BookingComponent = ({ setActivePage }) => {
  const { user } = useGlobal();

  const [searchName, setSearchName] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="  p-2 flex flex-col gap-4">
      {selectedMovie ? (
        <Selection movie={selectedMovie} setActivePage={setActivePage} />
      ) : (
        <>
          <SearchBar searchName={searchName} setSearchName={setSearchName} />

          {filteredMovies.length > 0 && (
            <h1 className="text-lg font-bold capitalize">
              Good Morning Mr. {user.username.split(".").join(" ")} !
            </h1>
          )}
          <div className="overflow-y-auto h-[400px] 2xl-custom:h-[650px]   scrollbar-hide w-11/12">
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <div
                    className="relative overflow-hidden rounded-lg cursor-pointer "
                    key={movie.id}
                    onClick={() => handleMovieClick(movie)}
                  >
                    <div className="overflow-hidden rounded-lg ">
                      <img
                        src={movie.image}
                        alt={movie.name}
                        className="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                      />
                    </div>
                    <div className="flex gap-2 text-lg font-semibold mt-2">
                      <h3>{movie.name}</h3>
                      <p>({movie.year})</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className=" flex justify-center items-center flex-col gap-6 text-2xl text-center text-gray-500 col-span-full">
                  <ImSad2 fontSize={80} className="text-gray-800" />
                  No movies found
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingComponent;
