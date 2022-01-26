import '../css/App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './main-page/MainPageContent';
import Header from './main-page/Header'
import Footer from './main-page/Footer'
import ProfilePageContent from './profile-page/ProfilePageContent';
import SearchPageContent from './search-page/SearchPageContent';
import EditProfileContent from './edit-profile-page/EditProfileContent';



function App() {

  const [userId, setUserId] = useState(null)

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
      <Router>
        <Header userId={userId} setUserId={setUserId} />
        <Routes>
          <Route  path='/' element={<MainPageContent professions={professions} locations={locations} />} />
          <Route path='/profile-:id' element={<ProfilePageContent />} />
          <Route path='/search-page' element={<SearchPageContent  />} />
          <Route path='/edit-profile' element={<EditProfileContent userId={userId} professions={professions} locations={locations} />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  );
}

export default App;
