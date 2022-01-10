import '../css/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from '../components/NavBar';
import SearchPage from './SearchPage';

function App() {
  return (
    <>
    <NavBar title="Mavens Jobsite"></NavBar>
    <Router>
      <Routes>
        <Route  path='/'
          element={
            <>
                <div id='contentContainer'>
                  <h1>Content Starts Here</h1>
                </div>
            </>
          }
        />
        <Route path='/search' element={<SearchPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
