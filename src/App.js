import React, { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import ResultsBox from './components/ResultsBox/ResultsBox.js';
import NominationsBox from './components/NominationsBox/NominationsBox.js';

const App = () => {
    const [movies, setMovies] = useState([] || '');
    const [searchQuery, setSearchQuery] = useState('');

    const onChange = () => {
        let searchQuery = document.getElementById('searchQuery');
        if (searchQuery !== '' || null) {
            getMovieRequest(searchQuery.value);
            setSearchQuery(searchQuery.value);
        } else {
            console.log('Search is empty');
        }
    };

    const getMovieRequest = async (searchQuery) => {
        const url = `http://www.omdbapi.com/?apikey=359e2398&s=${searchQuery}&type=movie`;

        const response = await fetch(url);
        const responseJson = await response.json();

        setMovies(responseJson);
    };

    return (
        <div className='App'>
            <div className='container'>
                <h1>The Shoppies</h1>
                <div className='card'>
                    <div className='searchForm'>
                        <FaSearch className='searchForm-icon' />
                        <input
                            id='searchQuery'
                            type='text'
                            className='searchBar'
                            placeholder='Search For A Movie'
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
            <div className='container grid'>
                <ResultsBox searchQuery={searchQuery} movies={movies.Search} />
                <NominationsBox />
            </div>
        </div>
    );
};

export default App;
