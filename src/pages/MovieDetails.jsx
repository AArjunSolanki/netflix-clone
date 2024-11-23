import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceholderImg from "../assets/png/img-placeholder.png";
import { formatDate } from "../core/utils";
import { toast } from "react-toastify";
import CircularProgressWithLabel from "../Components/UserScore";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailsById } from "../redux/actions/moviesAction";
import "../assets/styles/movieDetails.scss";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, loading } = useSelector((state) => state.movies);

  const getMovieDetails = useCallback((id) => {
    dispatch(getMovieDetailsById(id))
      .unwrap()
      .catch((err) => {
        console.log("err", err);
        toast.error(err.message);
      });
  }, []);

  useEffect(() => {
    if (id) {
      getMovieDetails(id);
    }
  }, [id]);

  return (
    <div className="movie-details">
      <div className="container">
        {loading ? (
          <div className="movie-details__loader">Loading...</div>
        ) : (
          <>
            {movieDetails ? (
              <div className="movie-details__content">
                <div className="movie-details__poster">
                  <img
                    src={
                      movieDetails?.Poster != 'N/A'
                        ? movieDetails?.Poster
                        : PlaceholderImg
                    }
                    alt={movieDetails?.Title}
                    className="movie-details__poster-image"
                  />
                  <div className="movie-details__rating">
                    <CircularProgressWithLabel
                      value={movieDetails.imdbRating}
                    />

                    <h2 className="movie-details__title">
                      {movieDetails?.Title}
                    </h2>
                    <p className="movie-details__plot">{movieDetails?.Plot}</p>
                    <p className="movie-details__info">
                      <strong>Release date:</strong>{" "}
                      {formatDate(movieDetails?.Released)}
                    </p>
                    <p className="movie-details__info">
                      <strong>Runtime:</strong> {movieDetails?.Runtime}
                    </p>
                    <p className="movie-details__overview">
                      {movieDetails?.overview}
                    </p>
                    <p className="movie-details__overview">
                      {movieDetails?.Ratings?.map((rate, index) => (
                        <div key={index}>
                          <div><strong>Source:</strong> {rate.Source}</div>
                          <div><strong>Value:</strong> {rate.Value}</div>
                        </div>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="movie-details__not-found">Data Not Found!</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
