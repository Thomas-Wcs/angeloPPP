import React from 'react';
import { MovieContext } from './MovieContext';

function Test3() {
  return (
    <div>
      <MovieContext.Consumer>
        {(context) => (
          <ul>
            {context.moviesTag
              ? context.moviesTag.map((movie) => (
                  <li key={movie.id}>
                    {movie.title}
                    {movie.media_type}
                    {movie.original_language}
                  </li>
                ))
              : null}
          </ul>
        )}
      </MovieContext.Consumer>
    </div>
  );
}

export default Test3;
