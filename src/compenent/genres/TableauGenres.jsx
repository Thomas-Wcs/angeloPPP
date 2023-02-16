import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableauGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=e5952f2708f5284e252d4e51b51aec21'
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id}>
              <td>{genre.id}</td>
              <td>{genre.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableauGenres;
