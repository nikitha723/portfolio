import React, { useEffect, useState } from 'react';
import axios from '../../shared/axios'
import './Row.css'

function Row({title, isLargeRow=false, fetchUrl}) {

    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        axios.get(fetchUrl)
        .then(request => setMovies(request.data.results))
    }, []) 

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} 
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Row;