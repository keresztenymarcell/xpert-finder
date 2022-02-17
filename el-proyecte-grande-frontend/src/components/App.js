import '../css/App.css';
import React, { useState, useContext } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './main-page/MainPageContent';
import Header from './main-page/Header'
import Footer from './main-page/Footer'
import ProfilePageContent from './profile-page/ProfilePageContent';
import SearchPageContent from './search-page/SearchPageContent';
import RegisterPage from './register-page/RegisterPage'
import LoginPage from './login-page/LoginPage';


export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
    <UserContext.Provider value={user}>
      <Router>
        <Header setUser={setUser}/>
        <Routes>
          <Route  path='/' element={<MainPageContent/>} />
          <Route path='/profile-:id' element={<ProfilePageContent />} />
          <Route path='/search-page' element={<SearchPageContent  />} />
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage setUser={setUser}/>}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
    <Footer/>
    </>
  );
}

export default App;
