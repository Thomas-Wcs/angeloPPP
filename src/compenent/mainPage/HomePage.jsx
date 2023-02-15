import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import './HomePage.css';
import getMovies from './GetMovies';
import TagSection from '../tagSection/TagSection';
import Questionnaire from '../questions/Questionnaire';

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
          <TagSection />
        </div>
        <section className='movies-section'>
          {movies.map((movie) => (
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
