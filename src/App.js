import './App.css';
import About from './pages/About';
import Home from"./pages/Home"
import Contact from "./pages/Contact"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveNavigation from './ActiveNavigation';
import PageNotFound from"./pages/PgeNotFound"
import User from './pages/User';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ActiveNavigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/user/:username" element={<User/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
