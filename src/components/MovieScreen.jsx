import MovieCard from "./MovieCard";

import styles from './MovieScreen.module.css'

const MovieScreen = ({ addMovie, list, page, setPage, movieList }) => {
  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie} />;
  });

  return (
    <div className="page">
      <h1>Lily's Movie Theater</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className={styles["movie-container"]}>{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
