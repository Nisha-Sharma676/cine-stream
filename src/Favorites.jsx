import "./App.css";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <main className="container">
      <h2>My Favourite Movies ❤️</h2>

      {favorites.length === 0 ? (
        <p className="empty-message">
          No favourite movies yet. Add some movies!
        </p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/300x450?text=No+Poster"
                }
                alt={movie.title}
                loading="lazy"
              />

              <h3>{movie.title}</h3>
              <p>{movie.release_date?.slice(0, 4) || "Year N/A"}</p>
              <span>⭐ {movie.vote_average.toFixed(1)}</span>

              <button
                className="favorite-btn"
                onClick={() => toggleFavorite(movie)}
              >
                ❤️ Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
