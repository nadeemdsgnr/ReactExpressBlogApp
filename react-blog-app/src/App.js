import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import NewList from './pages/NewsListPage';
import SingleNews from './pages/SingleNews';
import NoResultFound from './pages/NoResultFound';

function App() {
  return (
    < BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<NewList />} />
          <Route path="/news/:newsId" element={<SingleNews />} />
          <Route path="*" element={<NoResultFound />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
