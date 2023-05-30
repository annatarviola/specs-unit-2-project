import MovieCard from "./MovieCard";

const MovieScreen = ({
  addMovie,
  removeMovie,
  list,
  page,
  setPage,
  movieList,
}) => {
  const decrement = () => setPage(page--);
  const increment = () => setPage(page++);

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });

  return (
    <div className="page">
      <h1>Lily's Movie Theater</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="button-container">
        {page !== 1 && <button onClick={decrement}>Previous</button>}
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
