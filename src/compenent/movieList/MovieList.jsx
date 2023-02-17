import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const defaultPoster = 'https://www.zupimages.net/up/23/07/bwly.png';

const MovieList = ({ movies }) => {
  return (
    <div className='question-section'>
      <section className='movies-section'>
        {movies
          // .slice(0, 15)
          .sort((a, b) => b.vote_average - a.vote_average)
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
              <p className='movie-title'>Langue : {movie.original_language}</p>
              {/* <p className='movie-title'>Prod : {movie.vote_average}</p> */}
            </article>
          ))}
      </section>
    </div>
  );
};

export default MovieList;
