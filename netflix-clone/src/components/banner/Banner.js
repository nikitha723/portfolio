import axios from '../../shared/axios';
import React, { useEffect, useState } from 'react';
import './Banner.css'
import requests from '../../shared/requests'

function Banner(props) {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals)
            .then(request => setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]))
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    const styles = {
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }

    return (
        <header className="banner" style={styles}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.name || movie?.title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
            </div>
            <div className="banner__fadeBottom" />

        </header>
    );
}

export default Banner;