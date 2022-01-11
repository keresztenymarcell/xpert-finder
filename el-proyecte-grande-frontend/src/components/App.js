import '../css/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from '../components/NavBar';
import SearchPageContent from './SearchPageContent';
import MainPageContent from './MainPageContent';

function App() {
  return (
    <>
    <NavBar title="Mavens Jobsite"></NavBar>
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
