
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Subscription from './components/pages/Subscription'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />}/>
      <Route path='/subscription' element={<Subscription />}/>
    </Routes>
    </>
  );
}

export default App;
