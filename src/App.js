
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={ <Home /> }/>
        <Route path='/about/:name' element={ <About /> }/>
        <Route path='/contact/:id' element={ <Contact /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/logout' element={ <Logout /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
