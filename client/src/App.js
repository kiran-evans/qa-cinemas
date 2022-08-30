import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Searchbar from './components/structure/Searchbar';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import Home from './components/pages/Home';
import ClassificationsPage from './components/pages/ClassificationsPage';
import Contact from './components/pages/Contact';
import PlacesToGo from './components/pages/PlacesToGo';
import OpeningTimes from './components/pages/OpeningTimes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Searchbar />
        <div className='appBody'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/bookNow' element={"TBA"} />
            <Route path='/payForTickets' element={"TBA"} />
            <Route path='/listings' element={"TBA"} />
            <Route path='/newReleases' element={"TBA"} />
            <Route path='/discussionBoard' element={"TBA"} />
            <Route path='/screens' element={"TBA"} />
            <Route path='/classifications' element={<ClassificationsPage />} />
            <Route path='/placesToGo' element={<PlacesToGo />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/openingTimes' element={<OpeningTimes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
