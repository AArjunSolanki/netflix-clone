import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImg from "../assets/png/img-placeholder.png";
import "../assets/styles/movieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie?.imdbID}`} className="movie-link-tag">
      <div className="movie-card">
        <div className="movie-card__image">
          <img
            src={movie?.Poster !== 'N/A' ? `${movie?.Poster}` : PlaceholderImg}
            alt={movie?.original_title}
          />
        </div>
        <div className="movie-card__content">
          <h4>{movie?.Title}</h4>
          <p>{movie?.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
