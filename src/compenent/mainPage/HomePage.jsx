import React, { useState, useEffect } from 'react';
import './HomePage.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const defaultPoster =
  'https://via.placeholder.com/500x750.png?text=Image+not+available';

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
      <div className='search-container'>
        <input
          className='search-input'
          type='text'
          placeholder='Cherchez votre film...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='question-section'>
        <section className='movies-section'>
          {movies
            .sort((a, b) => b.vote_average - a.vote_average)
            // .slice(0, 10)
            .map((movie) => (
              <article className='movie-card' key={uuidv4()}>
                <div className='movie-poster'>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : defaultPoster
                    }
                    alt={movie.title}
                  />
                </div>
                <h3 className='movie-title'>{movie.title}</h3>
                <p className='movie-title'>
                  {movie.vote_average
                    ? movie.vote_average.toFixed(1) + '/10 ⭐'
                    : '-'}
                </p>
                <p className='movie-title'> Type : {movie.media_type}</p>
                <p className='movie-title'>
                  Langue : {movie.original_language}
                </p>
              </article>
            ))}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
