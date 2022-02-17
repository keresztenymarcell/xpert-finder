import '../css/App.css';
import  React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './main-page/MainPageContent';
import Header from './main-page/Header'
import Footer from './main-page/Footer'
import ProfilePageContent from './profile-page/ProfilePageContent';
import SearchPageContent from './search-page/SearchPageContent';
import RegisterPage from './register-page/RegisterPage'
import LoginPage from './login-page/LoginPage';
import EditProfileContent from './edit-profile-page/EditProfileContent'


export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useState(null)

  const [professions, setProfessions] = useState([])
  const [locations, setLocations] = useState([])

  useEffect(() => {
    async function loadProfessions() {
        const response = await fetch("/profession/all")
        const professions = await response.json()
        setProfessions(professions)

    }
    loadProfessions()
    
}, [])

useEffect(() => {
    async function loadLocations() {
        const response = await fetch("/location/all")
        const locations = await response.json()
        setLocations(locations)
    }
    loadLocations()
}, [])

  return (
    <>
    <UserContext.Provider value={user}>
      <Router>
        <Header setUser={setUser}/>
        <Routes>
          <Route  path='/' element={<MainPageContent professions={professions} locations={locations} />} />
          <Route path='/profile-:id' element={<ProfilePageContent />} />
          <Route path='/search-page' element={<SearchPageContent  />} />
          <Route path='/edit-profile' element={<EditProfileContent user={user} professions={professions} locations={locations} />} />
          <Route path="/register" element={<RegisterPage locations={locations}/>}></Route>
          <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
    <Footer/>
    </>
  );
}

export default App;
