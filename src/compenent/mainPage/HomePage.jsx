import React, { useState, useEffect } from 'react';
import './HomePage.css';
import axios from 'axios';
import SearchBar from '../searchBar/SearchBar';
import MovieList from '../movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await getMovies(query);
      setMovies(results);
    };
    fetchMovies();
  }, [query]);

  const getMovies = async (query = '') => {
    const defaultQuery = '';
    query = query.trim() || defaultQuery;
    let page = 1;
    const results = [];

    try {
      while (page <= 2) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=e5952f2708f5284e252d4e51b51aec21&query=${query}&page=${page}`
        );
        results.push(...response.data.results);
        page++;
      }
    } catch (error) {
      console.error(error);
    }

    return results;
  };

  return (
    <div>
      <h1 className='page-title'>Kesqu'onRegarde</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className='question-section'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
