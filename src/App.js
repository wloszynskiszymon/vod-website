import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { Routes, Route } from 'react-router-dom';
import GenresPage from './pages/GenresPage';
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route
          path='/movies'
          element={<GenresPage mediaType='movie' />}
        ></Route>
        <Route path='/series' element={<GenresPage mediaType='tv' />}></Route>
        <Route path='/:mediaType/:id' element={<DetailsPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
