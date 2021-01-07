import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ResultsBox = (props) => {
    let moviesArr;

    if (!props) {
        console.log('props are empty');
    } else {
        moviesArr = props.movies;
    }

    let nominatedMovies = [];

    const saveToLocalStorage = (e) => {
        const movieName = e.target.parentElement.innerText.replace(
            'Nominate',
            ''
        );
        movieName.split(',');
        if (!movieName) {
            return 'Movie name is empty';
        } else {
            movieName.replace(',', '');
            nominatedMovies.push(movieName);
            localStorage.setItem('savedMovies', nominatedMovies);
        }
    };

    const getLocalStorage = () => {
        nominatedMovies.push(localStorage.getItem('savedMovies'));
    };

    useEffect(() => {
        getLocalStorage();
    });

    return (
        <div className='card'>
            <h3>Results for "{props.searchQuery}"</h3>
            <h6>Please nominate up to five (5) films</h6>
            <ul className='resultsList'>
                {moviesArr
                    ? moviesArr.map((movie) => {
                          return (
                              <motion.li
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                  key={movie.imdbID}
                              >
                                  {movie.Title + ' (' + movie.Year + ')'}
                                  <button
                                      key={movie.imdbID}
                                      className='btn btn-outline-primary'
                                      onClick={saveToLocalStorage}
                                  >
                                      Nominate
                                  </button>
                              </motion.li>
                          );
                      })
                    : 'Please search for a movie!'}
            </ul>
        </div>
    );
};

export default ResultsBox;
