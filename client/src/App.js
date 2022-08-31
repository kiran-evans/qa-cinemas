import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import Home from './components/pages/Home';
import ClassificationsPage from './components/pages/ClassificationsPage';
import Contact from './components/pages/Contact';
import PlacesToGo from './components/pages/PlacesToGo';
import OpeningTimes from './components/pages/OpeningTimes';
import ScreensPage from './components/pages/Screens';
import PaymentPage from './components/pages/PaymentPage';
import MeetTheTeam from './components/pages/MeetTheTeamPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='appContainer'>
          <Header />
          <div className='appMain'>
            <div className='appBody'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/bookNow' element={"TBA"} />
                <Route path='/payForTickets' element={<PaymentPage />} />
                <Route path='/listings' element={"TBA"} />
                <Route path='/newReleases' element={"TBA"} />
                <Route path='/discussionBoard' element={"TBA"} />
                <Route path='/screens' element={<ScreensPage />} />
                <Route path='/classifications' element={<ClassificationsPage />} />
                <Route path='/placesToGo' element={<PlacesToGo />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/openingTimes' element={<OpeningTimes />} />
                <Route path='/meetTheTeam' element={<MeetTheTeam />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;