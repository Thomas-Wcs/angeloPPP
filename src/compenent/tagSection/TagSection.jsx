import React, { useState } from 'react';
import './TagSection.css';

const TagSection = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  console.log(selectedTags);

  const handleTagSelection = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((hi) => hi !== tag));
    }
  };

  return (
    <div className='question-container-tag-div'>
      <div className='tag-container-div'>
        <p>Quels sont vos tags préférés ?</p>
        <div>
          <input
            type='checkbox'
            id='tag1'
            onChange={() => handleTagSelection('Action')}
          />
          <label htmlFor='tag1'>Action</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag2'
            onChange={() => handleTagSelection('aventure')}
          />
          <label htmlFor='tag2'>Aventure</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag3'
            onChange={() => handleTagSelection('tag3')}
          />
          <label htmlFor='tag3'>Tag 3</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag4'
            onChange={() => handleTagSelection('tag4')}
          />
          <label htmlFor='tag4'>Tag 4</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag5'
            onChange={() => handleTagSelection('tag5')}
          />
          <label htmlFor='tag5'>Tag 5</label>
        </div>
      </div>
    </div>
  );
};

export default TagSection;
