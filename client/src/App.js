import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ClassificationsPage from './components/ClassificationsPage';
import Contact from './components/contact';
import OpeningTimes from './components/OpeningTimes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Searchbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bookNow' element={"TBA"} />
          <Route path='/payForTickets' element={"TBA"} />
          <Route path='/listings' element={"TBA"} />
          <Route path='/newReleases' element={"TBA"} />
          <Route path='/discussionBoard' element={"TBA"} />
          <Route path='/screens' element={"TBA"} />
          <Route path='/classifications' element={<ClassificationsPage />} />
          <Route path='/placesToVisit' element={"TBA"} />
          <Route path='/contactUs' element={<Contact />} />
          <Route path='/aboutUs' element={"TBA"} />
          <Route path='/openingTimes' element={<OpeningTimes />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
