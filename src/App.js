import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// layouts
import Header from './layouts/Header'
import Footer from './layouts/Footer'

// pages
import AboutMe from './pages/AboutMe'
import Education from './pages/Education'
import Experience from './pages/Experience'
import NoPage from './pages/NoPage';
import Projects from './pages/Projects';

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
        <Route exact path="/portfolio/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="education" element={<Education />}/>
          <Route path="experience" element={<Experience />}/>
          <Route path="*" element={<NoPage />}/>
          <Route path="projects" element={<Projects />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
