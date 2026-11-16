# Cine-Stream — Movie Discovery App

Cine-Stream is a React-based movie discovery application powered by **The Movie Database (TMDB) API**. It allows users to explore popular movies, search for their favourite films, browse movies through infinite scrolling, and save favourites for later.

## Features

- **Popular Movies:** Fetch and display popular movies using TMDB API.
- **Movie Search:** Search movies by title with a 500ms debounce.
- **Infinite Scrolling:** Automatically load additional movies using Intersection Observer.
- **Favorites:** Add or remove movies from your favourites list.
- **Local Storage:** Save favourite movies even after refreshing the browser.
- **Favorites Page:** Dedicated `/favorites` route.
- **Lazy Loading:** Movie posters load lazily for better performance.
- **Responsive Design:** Movie grid adapts to different screen sizes.

## Technologies Used

- React
- JavaScript
- Vite
- React Router DOM
- HTML5
- CSS3
- TMDB REST API
- Browser Local Storage
- Intersection Observer API

## Project Structure

```text
cine-stream/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── api.js
│   ├── Favorites.jsx
│   ├── main.jsx
│   └── assets/
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

git clone https://github.com/Nisha-Sharma676/cine-stream.git


### 2. Navigate to the project folder

```bash
cd cine-stream
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure TMDB API

Create a `.env` file in the project root directory.

Add your TMDB API Read Access Token:

```env
VITE_TMDB_KEY=YOUR_TMDB_READ_ACCESS_TOKEN
```

Do not upload your `.env` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## API Reference

This project uses The Movie Database (TMDB) API.

- Popular Movies: `/movie/popular`
- Search Movies: `/search/movie`
- Movie Posters: https://image.tmdb.org/t/p/w500/

API Documentation: https://developer.themoviedb.org/docs

## Favorites Storage

Favourite movies are stored in browser Local Storage using the key:

`cineFavorites`

This allows favourite movies to remain saved after browser refreshes.

## Future Enhancements

- AI-powered Mood Matcher.
- Movie details page.
- Genre-based filtering.
- Improved movie recommendations.

## Acknowledgement

Movie information and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

This product uses the TMDB API but is not endorsed or certified by TMDB.

---

