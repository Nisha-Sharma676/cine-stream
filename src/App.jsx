import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getPopularMovies, searchMovies } from "./api";
import Favorites from "./Favorites";
import "./App.css";

function Home({ favorites, toggleFavorite }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const loaderRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchFirstPage() {
      try {
        setLoading(true);
        setError("");
        setMovies([]);
        setPage(1);
        setHasMore(true);

        const data = query.trim()
          ? await searchMovies(query.trim(), 1)
          : await getPopularMovies(1);

        if (!cancelled) {
          setMovies(data.results);
          setHasMore(data.page < data.total_pages);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    const timer = setTimeout(fetchFirstPage, query.trim() ? 500 : 0);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    if (page === 1) return;

    let cancelled = false;

    async function fetchNextPage() {
      try {
        setLoadingMore(true);

        const data = query.trim()
          ? await searchMovies(query.trim(), page)
          : await getPopularMovies(page);

        if (!cancelled) {
          setMovies((prev) => [...prev, ...data.results]);
          setHasMore(data.page < data.total_pages);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoadingMore(false);
      }
    }

    fetchNextPage();

    return () => {
      cancelled = true;
    };
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !loading &&
          !loadingMore
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [hasMore, loading, loadingMore]);

  return (
    <main className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search your favourite movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <h2>{query ? `Search Results: ${query}` : "Popular Movies"}</h2>

      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p>No movies found.</p>
      )}

      <div className="movie-grid">
        {movies.map((movie) => {
          const isFavorite = favorites.some(
            (item) => item.id === movie.id
          );

          return (
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
                {isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
              </button>
            </div>
          );
        })}
      </div>

      <div ref={loaderRef} className="loader">
        {loadingMore && <p>Loading more movies...</p>}
        {!hasMore && movies.length > 0 && (
          <p>You have reached the end!</p>
        )}
      </div>
    </main>
  );
}

function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cineFavorites")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cineFavorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(movie) {
    setFavorites((prev) =>
      prev.some((item) => item.id === movie.id)
        ? prev.filter((item) => item.id !== movie.id)
        : [...prev, movie]
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <h1>CINE-STREAM</h1>
          <p>Discover Your Next Favourite Movie</p>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/favorites">❤️ Favorites ({favorites.length})</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
