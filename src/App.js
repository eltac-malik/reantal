import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Base from 'Routes/Base'
import Home from 'Pages/Home'
import Contact from 'Pages/Contact/Contact'
import About from 'Pages/About'
import Blog from 'Pages/Blog/Blog'
import BlogDetails from 'Pages/Blog/BlogDetails'
import Login from 'Pages/Login'
import Car from 'Pages/Car'
import Profile from 'Pages/Profile'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Base><Home/></Base>}/>
          <Route path='/contact' element={<Base><Contact/></Base>}/>
          <Route path='/about' element={<Base><About/></Base>}/>
          <Route path='/blog' element={<Base><Blog/></Base>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/cars' element={<Base><Car/></Base>}/>
          <Route path='/blog/details' element={<Base><BlogDetails/></Base>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
