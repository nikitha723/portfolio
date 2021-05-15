import React from 'react';
import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import requests from '../../shared/requests'
import Row from '../row/Row';

function HomeScreen(props) {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row 
                title="NETFLIX ORIGINALS"
                isLargeRow
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row 
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row 
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
            
        </div>
    );
}

export default HomeScreen;