import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Home from './pages/Home';
import GrowingRevenues from './pages/GrowingRevenues';
import OperationalEfficiency from './pages/OperationalEfficiency';
import CaseStudy from './pages/CaseStudy';
import MoreInfo from './pages/MoreInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MyNavbar/>
      <Routes>
        <Route path="/CaseStudy" element={<CaseStudy/>}/>
        <Route path="/MoreInfo" element={<MoreInfo/>}/>
        <Route path="/GrowingRevenues" element={<GrowingRevenues/>}/>
        <Route path="/OperationalEfficiency" element={<OperationalEfficiency/>}/>
        <Route path="/" element={<Home/>}/> 
      </Routes>
      <MyFooter/>
    </Router>
  );
}

export default App;