import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin/Signin';

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default App
