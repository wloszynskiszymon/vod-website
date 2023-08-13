import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/MoviePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/:media_type/:id' element={<MoviePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
