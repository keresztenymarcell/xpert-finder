import '../css/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPageContent from './MainPageContent';
import Footer from './Footer';
import Header from './Header'

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
