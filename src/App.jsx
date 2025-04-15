import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Modul from './pages/Modul';
import Calculator from './pages/Calculator';
import NewsPortal from './pages/NewsPortal';
import LatestNews from './components/LatestNews';
import NewsDetail from './components/NewsDetail';
import './styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modul" element={<Modul />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/newsportal" element={<NewsPortal />} />
        <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
        <Route path="/" element={<LatestNews />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>
    </>
  );
}

export default App;
