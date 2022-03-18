import React from 'react';
import './App.css';
import Row from './components/row/Row';
import requests from './requests';
import Banner from './components/banner/Banner';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* <h1>
        Hey, Sexy! Alex is building a clone 🚀
      </h1> */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
