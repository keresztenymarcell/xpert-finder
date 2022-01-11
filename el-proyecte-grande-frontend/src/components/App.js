import '../css/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from '../components/NavBar';
import SearchPageContent from './SearchPageContent';
import MainPageContent from './MainPageContent';

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
    <NavBar title="Mavens Jobsite" user={user} setUser={setUser}></NavBar>
        <Router>
          <Routes>
            <Route  path='/' element={<MainPageContent/>} />
            <Route path='/search' element={<SearchPageContent/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
