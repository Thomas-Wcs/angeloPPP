import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export function MovieContextProvider(props) {
  const [moviesTag, setMoviesTag] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=e5952f2708f5284e252d4e51b51aec21'
      );
      setMoviesTag(response.data.results);
    }
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ moviesTag }}>
      {props.children}
    </MovieContext.Provider>
  );
}
