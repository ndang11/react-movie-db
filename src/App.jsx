import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home'; 
import NavBar from './component/NavBar.jsx';
import ContextData from './context/Context.jsx';
// import SearchBar from './component/SearchBar.jsx';
import MovieDetailPage from './pages/movieDetailPage.jsx';

function App() {
  return (
    <ContextData>
      <Router>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/search' element={<SearchBar/>}/> */}
        <Route path="/movie/:movieId" element={<MovieDetailPage />} />
      </Routes>
    </Router>
    </ContextData>
  );
}
 export default App