
import { BrowserRouter, Switch,Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Header/Mainnavbar';
import { Container } from '@mui/system';
import Trending from './components/Trening/Trending';
import Movie from './components/Movie/Movie';
import Show from './components/Show/Show';
import Search from './components/Search/Search';
function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>    
          <div className="app">
             <Container>
              <Routes>
              <Route path="/" element={<Trending/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/show" element={<Show/>}/>
                <Route path="/search" element={<Search/>}/>
              </Routes>
             </Container>
          </div>
          <SimpleBottomNavigation/>
      </BrowserRouter>          
    </>
  );
}

export default App;
