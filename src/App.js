import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Contact from './pages/contacts/Contacts'

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
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
