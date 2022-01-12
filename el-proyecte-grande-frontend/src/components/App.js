import '../css/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './MainPageContent';
import Header from './Header'
import Footer from './Footer'
import ProfilePageContent from './ProfilePageContent';
import SearchPageContent from './SearchPageContent';



function App() {

  const [user, setUser] = useState(null)

  return (
    <>
    <Header user={user}/>
      <Router>
        <Routes>
          <Route  path='/' element={<MainPageContent/>} />
          <Route path='/profile/:id' element={<ProfilePageContent />} />
          <Route path='/search-page' element={<SearchPageContent/>} />
        </Routes>
      </Router>
    <Footer/>
    </>
  );
}

export default App;
