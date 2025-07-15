import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Feeds from './pages/Feeds';

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/feeds" element={<Feeds />} />
        {/* Add other routes here as needed */}
      </Routes>
    </div>
  )
}

export default App
