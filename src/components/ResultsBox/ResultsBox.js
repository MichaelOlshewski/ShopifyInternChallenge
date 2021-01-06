import React from 'react';

const ResultsBox = (props) => {
    let moviesArr;

    if (!props) {
        console.log('props are empty');
    } else {
        moviesArr = props.movies;
    }

    console.log('Movies Array');
    console.log(moviesArr);

    return (
        <div className='card'>
            <h3>Results for "{props.searchQuery}"</h3>
            <h6>Please nominate up to five (5) films</h6>
            <ul className='resultsList'>
                {moviesArr
                    ? moviesArr.map((movie) => {
                          return (
                              <li key={movie.imdbID}>
                                  {movie.Title + ' (' + movie.Year + ')'}
                                  <button
                                      key={movie.imdbID}
                                      className='btn btn-outline-primary'
                                  >
                                      Nominate
                                  </button>
                              </li>
                          );
                      })
                    : 'Please search for a movie!'}
            </ul>
        </div>
    );
};

export default ResultsBox;
