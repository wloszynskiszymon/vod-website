import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&region=PL&with_original_title&with_images=true&with_media_type=movie`;

function App() {
  const [imageHeader, setImageHeader] = useState(null);
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
      const res = await axios.get(API_URL_MOVIES);
      const headerMovies = res.data.results.slice(0, 10);
      const randomIndex = Math.floor(Math.random() * 10);

      setMovies(headerMovies);
      setImageHeader(
        `https://image.tmdb.org/t/p/original/${headerMovies[randomIndex].backdrop_path}`
      );
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
    console.log('test')
  }, [fetchMovies]);

  return (
    <div className='overflow-hidden'>
      <NavBar />
      {imageHeader && <Header img={imageHeader} />}
      <Main movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
