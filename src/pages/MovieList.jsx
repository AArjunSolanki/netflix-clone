import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovieByName,
  getPopularMovieList,
} from "../redux/actions/moviesAction";
import "../assets/styles/movieList.scss";

const MovieList = () => {
  const dispatch = useDispatch();
  const {
    popularMovieList,
    popularMoviePageNo,
    totalPopularMoviesPages,
    loading,
  } = useSelector((state) => state.movies);

  const [searchFilter, setSearchFilter] = useState("");

  const getMovieList = useCallback(() => {
    dispatch(getPopularMovieList())
      .unwrap()
      .catch((err) => {
        console.log("err", err);
        toast.error(err.message);
      });
  }, []);

  useEffect(() => {
    getMovieList();
  }, []);

  const searchClickHandler = async () => {
    if (searchFilter !== "") {
      dispatch(getPopularMovieByName(searchFilter))
        .unwrap()
        .catch((err) => {
          console.log("err", err);
          toast.error(err.message);
        });
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchFilter(value);
  };

  return (
    <div className="movie-list">
      <div className="container">
        <h2 className="movie-list__title">Popular Movies</h2>

        <div className="movie-list__search">
          <input
            type="text"
            value={searchFilter}
            onChange={handleInputChange}
            placeholder="Search Movies"
            className="movie-list__input"
          />
          <button
            onClick={searchClickHandler}
            className="movie-list__search-button"
          >
            Search
          </button>
        </div>

        {loading ? (
          <div className="movie-list__loader">Loading...</div>
        ) : (
          <>
            <div className="movie-list__grid">
              {popularMovieList?.length > 0 ? (
                popularMovieList?.map((movie, index) => (
                  <div key={index} className="movie-list__grid-item">
                    <MovieCard movie={movie} />
                  </div>
                ))
              ) : (
                <div className="movie-list__not-found">Not Found!</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
