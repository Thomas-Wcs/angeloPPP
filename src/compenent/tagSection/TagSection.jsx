import React, { useEffect, useState } from 'react';
import './TagSection.css';

const TagSection = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  console.log(selectedTags);
  const [moviesTag, setMoviesTag] = useState([]);
  // console.log(moviesTag);

  const handleTagSelection = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((x) => x !== tag));
    }
  };

  const getMoviesByGenres = async (genreIds) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=e5952f2708f5284e252d4e51b51aec21&with_genres=${genreIds.join(
      ','
    )}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
  };

  useEffect(() => {
    if (selectedTags.length > 0) {
      getMoviesByGenres(selectedTags)
        .then((data) => setMoviesTag(data))
        .catch((error) => console.log(error));
    } else {
      setMoviesTag([]);
    }
  }, [selectedTags]);

  return (
    <div className='question-container-tag-div'>
      <div className='tag-container-div'>
        <p>Quels sont vos tags préférés ?</p>
        <div>
          <input
            type='checkbox'
            id='tag1'
            onChange={() => handleTagSelection(28)}
          />
          <label htmlFor='tag1'>Action</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag2'
            onChange={() => handleTagSelection(12)}
          />
          <label htmlFor='tag2'>Aventure</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag3'
            onChange={() => handleTagSelection(16)}
          />
          <label htmlFor='tag3'>Tag 3</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag4'
            onChange={() => handleTagSelection(35)}
          />
          <label htmlFor='tag4'>Tag 4</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag5'
            onChange={() => handleTagSelection(14)}
          />
          <label htmlFor='tag5'>Fantasy</label>
        </div>
      </div>
    </div>
  );
};

export default TagSection;
