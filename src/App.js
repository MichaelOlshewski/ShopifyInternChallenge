import React, { useState, useEffect } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import ResultsBox from './components/ResultsBox/ResultsBox.js';
import NominationsBox from './components/NominationsBox/NominationsBox.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    const [movies, setMovies] = useState([] || '');
    const [searchQuery, setSearchQuery] = useState('');

    const onChange = () => {
        let searchQuery = document.getElementById('searchQuery');
        if (searchQuery !== '' || null) {
            getMovieRequest(searchQuery.value);
            setSearchQuery(searchQuery.value);
        } else {
            toast.warn('Please search for a movie!');
        }
    };

    const getMovieRequest = async (searchQuery) => {
        const url = `https://www.omdbapi.com/?apikey=359e2398&s=${searchQuery}&type=movie`;

        const response = await fetch(url);
        const responseJson = await response.json();

        setMovies(responseJson);
    };

    const initializeStorage = () => {
        if (!localStorage.getItem('savedMovies')) {
            localStorage.setItem('savedMovies', '[]');
        }
    };

    useEffect(() => {
        initializeStorage();
    });

    return (
        <div className='App'>
            <ToastContainer />
            <div className='container'>
                <h1 className='title'>The Shoppies</h1>
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
