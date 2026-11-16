# AI Prompts and Debugging Log

## Project: Cine-Stream – Movie Discovery App

This file documents AI assistance used during the development and debugging of Cine-Stream.

### 1. Project Setup

**Prompt:**  
How can I create a React movie discovery application using Vite and configure it to use the TMDB API?

**Purpose:**  
To understand the project setup, folder structure, and API integration process.

### 2. TMDB API Integration

**Prompt:**  
How can I fetch popular movies and search movies by title using the TMDB REST API with a Bearer token?

**Purpose:**  
To implement API functions for fetching popular movies and searching movies.

### 3. Search Debouncing

**Prompt:**  
How can I implement a 500ms debounce in React so that API requests are made only after the user stops typing?

**Purpose:**  
To reduce unnecessary API requests during movie searches.

### 4. Infinite Scrolling

**Prompt:**  
How can I use the Intersection Observer API in React to automatically load the next page of movies when the user scrolls down?

**Purpose:**  
To implement infinite scrolling for the movie list.

### 5. Favorites and Local Storage

**Prompt:**  
How can I save favorite movies in localStorage and keep them available after refreshing the browser?

**Purpose:**  
To implement persistent favorites functionality.

### 6. Debugging API Authentication

**Issue:**  
The deployed application displayed a TMDB API 401 Unauthorized error.

**Prompt:**  
How can I configure VITE_TMDB_KEY as an environment variable in Vercel and redeploy a Vite application?

**Resolution:**  
Configured the environment variable in Vercel and redeployed the application.

### 7. Debugging React Application

**Prompt:**  
How can I identify and fix React and Vite errors when the application fails to load or display movie data?

**Purpose:**  
To troubleshoot development and API integration issues.

---

## Outcome

AI assistance helped with project setup, API integration, debugging, search debouncing, infinite scrolling, and favorites persistence. All major application features were tested in the deployed application.