import '../css/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './MainPageContent';
import Footer from './Footer';
import Header from './Header';
import ProfilePageContent from './ProfilePageContent';


function App() {

  const [user, setUser] = useState(null)

  return (
    <>
    <Header user={user}/>
    <fjsfjs>
      <Router>
      <Routes>
        <Route  path='/' element={<MainPageContent/>} />
        <Route path='/profile/:id' element={<ProfilePageContent />} />
      </Routes>
    </Router>
    <Footer/>
    </fjsfjs>
    </>
  );
}

export default App;
