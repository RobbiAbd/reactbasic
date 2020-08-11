import React, { useState } from "react";
import axios from "axios";
import { Skeleton, Input, Empty } from "antd";
import MovieCard from "../../../components/MovieCard";

const { Search } = Input;

const Movie = () => {
  document.title = "Movie";
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const onSearchMovie = (key) => {
    setLoading(true);
    setTimeout(() => {
      if (key.length > 0) {
        getMovies(key);
        setLoading(false);
      }
    }, 3000);
  };

  const getMovies = async (key) => {
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt3896198&apikey=9d1ecc6c&s=" +
          key
      )
      .then((data) => setMovies(data.data.Search))
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <>
      <Search
        placeholder="cari movie"
        onSearch={onSearchMovie}
        enterButton
        loading={loading}
      />

      <div className="site-card-wrapper" style={{ marginTop: "30px" }}>
        {movies.length > 0 ? (
          <MovieCard movies={movies} />
        ) : loading ? (
          <Skeleton
            paragraph={{ rows: 4 }}
            style={{ width: 200 }}
            active="active"
            size="large"
          />
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
