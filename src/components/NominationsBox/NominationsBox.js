import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NominationsBox = () => {
    const [moviesArr, setMoviesArr] = useState([]);
    const clearLocalStorage = () => {
        localStorage.setItem('savedMovies', '[]');
        setMoviesArr([]);
        toast.error('You have cleared all nominations');
    };

    let nominatedMovies = JSON.parse(
        localStorage.getItem('savedMovies') || '[]'
    );

    const removeFromLocalStorage = (e) => {
        const movieNameIndex =
            e.target.parentElement.getAttribute('data-index') - 1;

        if (movieNameIndex !== -1) {
            nominatedMovies.splice(movieNameIndex, 1);
        }

        toast.warn('You have removed that movie from your nominations');

        localStorage.setItem('savedMovies', JSON.stringify(nominatedMovies));

        setMoviesArr(JSON.parse(localStorage.getItem('savedMovies') || '[]'));
    };

    setInterval(function () {
        if (moviesArr === JSON.parse(localStorage.getItem('savedMovies'))) {
            clearInterval();
        } else {
            setMoviesArr(
                JSON.parse(localStorage.getItem('savedMovies') || '[]')
            );
        }
    }, 1000);

    return (
        <div className='card'>
            <h3>Nominations</h3>
            <ul className='nominationList'>
                {nominatedMovies.map((movie, index) => {
                    index = index + 1;
                    return (
                        <li
                            key={movie}
                            data-index={index}
                            data-movie={movie.Title}
                            data-year={movie.Year}
                        >
                            {movie}
                            <button
                                key={index}
                                className='btn btn-outline-primary'
                                onClick={removeFromLocalStorage}
                                data-movie={movie.Title}
                                data-year={movie.Year}
                            >
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
            <p>You have {nominatedMovies.length} of 5 nominated movies!</p>
            <br />
            <button
                className='btn btn-outline-primary clearStorage'
                onClick={clearLocalStorage}
            >
                Clear Nominations
            </button>
        </div>
    );
};

export default NominationsBox;
