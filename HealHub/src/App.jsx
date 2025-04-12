import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Book from './Components/Book'; // Import Book component
import Counselling from './Components/Counselling';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Recommendations from './Components/Reccommendations'; // Correct spelling
import Support from './Components/Support';
import Therapy from './Components/Therapy';
import Footer from './Components/Footer'; // Import Footer component
import EditProfile from './Components/EditProfile'; // Import EditProfile component
import Logout from './Components/Logout'; // Import Logout component
import Login from './Components/Login'; // Import Login component
import Signup from './Components/Signup'; // Import Signup component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} /> {/* Redirect root to /Home */}
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/therapy" element={<Therapy />} /> {/* Ensure route matches component name */}
        <Route path="/support" element={<Support />} />
        <Route path="/recommendations" element={<Recommendations />} /> {/* Ensure route matches component name */}
        <Route path="/book" element={<Book />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit-profile" element={<EditProfile />} /> {/* Add EditProfile route */}
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/login' element={<Login/>}/> {/* Add Login route */}
        <Route path='/signup' element={<Signup/>}/> {/* Add Logout route */}

      </Routes>
      <Footer /> {/* Add Footer component */}
    </Router>
  );
}

export default App;
