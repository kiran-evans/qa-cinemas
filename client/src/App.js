import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ClassificationsPage from './components/ClassificationsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/classifications' element={<ClassificationsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
