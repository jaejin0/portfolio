import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// layouts
import Header from './layouts/Header'
import Footer from './layouts/Footer'

// pages
import AboutMe from './pages/about-me/AboutMe'
import Contacts from './pages/contacts/Contacts'
import Education from './pages/education/Education'
import Experience from './pages/experience/Experience'
import Games from './pages/games/Games'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<Contacts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
