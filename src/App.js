import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages'
import Interest from './pages/interest'
import Projects from './pages/projects'
import Socmed from './components/Socmed';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<About/>} />
        <Route path="/interest" exact element={<Interest/>} />
        <Route path="/projects" exact element={<Projects/>} />
      </Routes>
      <Socmed />
      <Interest />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
