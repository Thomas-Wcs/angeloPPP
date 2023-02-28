import React from 'react';
import { MovieContext } from './MovieContext';

function Test2() {
  return (
    <div>
      <MovieContext.Consumer>
        {(context) => (
          <ul>
            {context.moviesTag
              ? context.moviesTag.map((movie) => (
                  <li key={movie.id}>{movie.title}</li>
                ))
              : null}
          </ul>
        )}
      </MovieContext.Consumer>
    </div>
  );
}

export default Test2;
