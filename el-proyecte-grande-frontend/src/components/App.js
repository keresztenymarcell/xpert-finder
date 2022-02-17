import '../css/App.css';
import '../css/Login.css';
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
import UserService from './service/UserService';


export const UserContext = React.createContext();
export const LocationsContext = React.createContext();
export const ProfessionsContext = React.createContext();

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

useEffect(() => {
  async function loadUser() {
    if (window.localStorage.getItem("access_token")) {
      saveUserInfoToMemory(window.localStorage.getItem("access_token"))
    }
  }
  loadUser()
}, [])

async function saveUserInfoToMemory(accessToken) {
  const data = parseJwt(accessToken);
  const userInfo = await getUserInfoFromBackend(data.sub);
  const user = {
    username: userInfo.username,
    id: userInfo.id,
    isExpert: userInfo.expert
  }
  setUser(user);
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

async function getUserInfoFromBackend(username) {
  const response = await UserService.getFetchWithHeader(`/user/get-important-info?username=${username}`);
  return await response.json();
}

  return (
    <>
    <ProfessionsContext.Provider value={professions}>
    <LocationsContext.Provider value={locations}>
    <UserContext.Provider value={user}>
      <Router>
        <Header setUser={setUser}/>
        <Routes>
          <Route  path='/' element={<MainPageContent />} />
          <Route path='/profile-:id' element={<ProfilePageContent user={user} />} />
          <Route path='/search-page' element={<SearchPageContent  />} />
          <Route path='/edit-profile' element={<EditProfileContent />} />
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage saveUserInfoToMemory={saveUserInfoToMemory}/>}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
    </LocationsContext.Provider>
    </ProfessionsContext.Provider>
    <Footer/>
    </>
  );
}

export default App;
