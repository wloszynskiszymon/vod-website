import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const API_URL_SERIES = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

function App() {
  const [moviesImages, setMoviesImages] = useState([]);
  const [seriesImages, setSeriesImages] = useState([]);
  const [imageHeader, setImageHeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMoviesAndSeries = async () => {
    try {
      const [moviesResponse, seriesResponse] = await Promise.all([
        axios.get(API_URL_MOVIES),
        axios.get(API_URL_SERIES),
      ]);
      const movies = moviesResponse.data.results.slice(0, 5);
      const series = seriesResponse.data.results.slice(4, 9);
      setMoviesImages(movies);
      setSeriesImages(series);

      const randomIndex = Math.floor(Math.random() * 5);
      setImageHeader(
        `https://image.tmdb.org/t/p/original/${movies[randomIndex].backdrop_path}`
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesAndSeries();
  }, []);

  const fullArray = [moviesImages, seriesImages];
  console.log(fullArray);
  return (
    <>
      <NavBar />
      <Header img={imageHeader} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Main img={fullArray} />
      )}
      <Footer />
    </>
  );
}

export default App;
