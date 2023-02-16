import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import './HomePage.css';
import Questionnaire from '../questions/Questionnaire';
import axios from 'axios';

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
    const defaultQuery = 'lover';
    query = query.trim() || defaultQuery;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e5952f2708f5284e252d4e51b51aec21&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
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
        <div>
          <Questionnaire />
        </div>
        <section className='movies-section'>
          {movies
            .sort((a, b) => b.vote_average - a.vote_average)
            // .slice(0, 10)
            .map((movie) => (
              <article className='movie-card' key={movie.id}>
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
                <p className='movie-title'>{movie.title}</p>
                <p className='movie-title'>
                  {movie.vote_average
                    ? movie.vote_average.toFixed(1) + '/10 ⭐'
                    : '-'}
                </p>

                {/* <p className='movie-title'>{movie.overview}</p> */}
              </article>
            ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
