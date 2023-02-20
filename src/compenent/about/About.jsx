import React from 'react';
import Tom1 from '../../testAPI/Tom1';
import SearchBar from '../searchBar/SearchBar';

const About = () => {
  return (
    <div>
      <h1>A propos de nous :</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        neque tempore, sint culpa ut numquam, illum facilis natus ducimus
        voluptate repellendus. Fuga eos ipsum quos delectus dolore dicta labore
        debitis?
      </p>
      <SearchBar />
      <Tom1 />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        neque tempore, sint culpa ut numquam, illum facilis natus ducimus
        voluptate repellendus. Fuga eos ipsum quos delectus dolore dicta labore
        debitis?
      </p>
    </div>
  );
};

export default About;
