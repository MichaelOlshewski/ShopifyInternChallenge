import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResultsBox = (props) => {
    let moviesArr;

    if (!props) {
        toast.error('There was an error, Please try again!');
    } else {
        moviesArr = props.movies;
    }

    let nominatedMovies = [];

    const [moviesArray, setMoviesArray] = useState([]);

    const saveToLocalStorage = (e) => {
        const movieName =
            e.target.parentElement.getAttribute('data-movie') +
            ' (' +
            e.target.parentElement.getAttribute('data-year') +
            ')';

        movieName.split(',');

        if (nominatedMovies.length >= 5) {
            toast.warn(
                'You have used all five (5) of your votes for The Shoppies!'
            );
        } else {
            if (!movieName) {
                toast.error('Movie cannot be empty');
            } else {
                nominatedMovies.push(movieName);
                localStorage.setItem(
                    'savedMovies',
                    JSON.stringify(nominatedMovies)
                );
                toast.success(
                    'You have nominated ' + movieName + ' for The Shoppies!'
                );
            }
        }
        setMoviesArray(moviesArr);
    };

    const getLocalStorage = () => {
        nominatedMovies = JSON.parse(
            localStorage.getItem('savedMovies') || '[]'
        );
    };

    useEffect(() => {
        getLocalStorage();
    });

    setInterval(function () {
        if (moviesArr === JSON.parse(localStorage.getItem('savedMovies'))) {
            clearInterval();
        } else {
            setMoviesArray(
                JSON.parse(localStorage.getItem('savedMovies') || '[]')
            );
        }
    }, 1000);

    return (
        <div className='card'>
            <h3>Results for "{props.searchQuery}"</h3>
            <h6>Please nominate up to five (5) films</h6>
            <ul className='resultsList'>
                {moviesArr
                    ? moviesArr.map((movie, index) => {
                          index = index + 1;
                          let movieString =
                              movie.Title + ' (' + movie.Year + ')';

                          if (
                              localStorage
                                  .getItem('savedMovies')
                                  .includes(movieString)
                          ) {
                              return (
                                  <li
                                      key={index}
                                      data-movie={movie.Title}
                                      data-year={movie.Year}
                                      data-index={index}
                                  >
                                      {movie.Title + ' (' + movie.Year + ')'}
                                      <button
                                          data-movie={movie.Title}
                                          data-year={movie.Year}
                                          className='btn btn-outline-primary'
                                          onClick={saveToLocalStorage}
                                          id={index}
                                          disabled
                                      >
                                          Nominate
                                      </button>
                                  </li>
                              );
                          } else {
                              return (
                                  <li
                                      key={index}
                                      data-movie={movie.Title}
                                      data-year={movie.Year}
                                      data-index={index}
                                  >
                                      {movie.Title + ' (' + movie.Year + ')'}
                                      <button
                                          data-movie={movie.Title}
                                          data-year={movie.Year}
                                          className='btn btn-outline-primary'
                                          onClick={saveToLocalStorage}
                                          id={index}
                                      >
                                          Nominate
                                      </button>
                                  </li>
                              );
                          }
                      })
                    : 'Please search for a movie!'}
            </ul>
        </div>
    );
};

export default ResultsBox;
