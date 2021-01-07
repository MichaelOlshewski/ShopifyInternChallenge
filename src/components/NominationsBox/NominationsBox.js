import React from 'react';

const NominationsBox = () => {
    const clearLocalStorage = () => {
        localStorage.clear();
        alert('Nominations have been cleared!');
    };

    let nominatedMovies = [];

    if (localStorage.getItem('savedMovies')) {
        nominatedMovies = localStorage
            .getItem('savedMovies')
            .replace(',', '')
            .split(',');
    }

    const removeFromLocalStorage = (e) => {
        const movieName = e.target.parentElement.innerText.replace(
            'Remove',
            ''
        );
        const index = nominatedMovies.indexOf(movieName);

        if (index !== -1) {
            nominatedMovies.splice(index, 1);
        }

        localStorage.setItem('savedMovies', nominatedMovies);
        nominatedMovies = localStorage.getItem('savedMovies');

        alert(movieName + ' was removed from your nominations');
    };
    console.log(localStorage.getItem('savedMovies'));
    console.log(nominatedMovies);

    return (
        <div className='card'>
            <h3>Nominations</h3>
            <ul className='nominationList'>
                {nominatedMovies.map((movie) => {
                    return (
                        <li key={movie}>
                            {movie}
                            <button
                                className='btn btn-outline-primary'
                                onClick={removeFromLocalStorage}
                            >
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
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
