import '../css/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from '../components/NavBar';
import SearchPageContent from './SearchPageContent';
import MainPageContent from './MainPageContent';
import Header from './Header'
import Footer from './Footer'
import ExpertCard from './ExpertCard'

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
    <Header user={user}/>
      <Router>
      <Routes>
        <Route  path='/' element={<MainPageContent/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
