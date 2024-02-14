import "./styles/main.scss";
import FilmInfoPage from './components/FilmInfoPage/FilmInfoPage';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserFilmPage from './components/UserFilmPage/UserFilmPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmInfoPage/>} />
          <Route path="/user-films" element={<UserFilmPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
