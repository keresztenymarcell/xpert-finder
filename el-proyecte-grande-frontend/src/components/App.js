import '../css/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './main-page/MainPageContent';
import Header from './main-page/Header'
import Footer from './main-page/Footer'
import ProfilePageContent from './profile-page/ProfilePageContent';
import SearchPageContent from './search-page/SearchPageContent';
import PersonalInfo from './register-page/Personalnfo'



function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <Router>
        <Header user={user}/>
        <Routes>
          <Route  path='/' element={<MainPageContent/>} />
          <Route path='/profile-:id' element={<ProfilePageContent />} />
          <Route path='/search-page' element={<SearchPageContent  />} />
          <Route path="/register" element={<PersonalInfo/>}></Route>
        </Routes>
      </Router>
    <Footer/>
    </>
  );
}

export default App;
