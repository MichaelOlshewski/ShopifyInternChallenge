import React from 'react';

const NominationsBox = () => {
    const clearLocalStorage = () => {
        localStorage.clear();
        alert('Nominations have been cleared!');
    };

    let nominatedMovies = [];

    if (localStorage.getItem('savedMovies')) {
        nominatedMovies = localStorage.getItem('savedMovies').split(',');
    }

    const removeFromLocalStorage = (e) => {
        const movieNameIndex =
            e.target.parentElement.getAttribute('data-index') - 1;

        if (movieNameIndex !== -1) {
            nominatedMovies.splice(movieNameIndex, 1);
        }

        localStorage.setItem('savedMovies', nominatedMovies);
    };

    return (
        <div className='card'>
            <h3>Nominations</h3>
            <ul className='nominationList'>
                {nominatedMovies.map((movie, index) => {
                    index = index + 1;
                    return (
                        <li key={movie} data-index={index}>
                            {movie}
                            <button
                                key={index}
                                className='btn btn-outline-primary'
                                onClick={removeFromLocalStorage}
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
