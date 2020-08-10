import React, { useState } from "react";
import axios from "axios";
import { Input, Empty } from "antd";
import MovieCard from "../../../components/MovieCard";

const { Search } = Input;

const Movie = () => {
  document.title = "Movie";

  const onSearchMovie = (key) => {
    if (key.length > 0) {
      getMovies(key);
    }
  };

  const [movies, setMovies] = useState([]);

  const getMovies = async (key) => {
    await axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=9d1ecc6c&s=" + key)
      .then((data) => setMovies(data.data.Search))
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <>
      <Search placeholder="cari movie" onSearch={onSearchMovie} enterButton />

      <div className="site-card-wrapper" style={{ marginTop: "30px" }}>
        {movies.length > 0 ? (
          <MovieCard movies={movies} />
        ) : (
          <Empty
            style={{ marginTop: "100px", marginBottom: "100px" }}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </div>
    </>
  );
};

export default Movie;
