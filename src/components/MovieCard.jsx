import styles from './MovieCard.module.css'

const MovieCard = ({movie, addMovie}) => {
  return (
    <div className={styles['movie-card']}>
      <div>
        <img className={styles.image} alt='movie poster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      <button onClick={() => addMovie(movie)}>Add to List</button>
    </div>
  );
};

export default MovieCard;
