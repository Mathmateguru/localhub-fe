import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Feeds from './pages/Feeds';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserProvider from './contexts/userContext';

function App() {


  return (
    <UserProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/feeds"
          element={
            <ProtectedRoutes>
              <Feeds />
              
            </ProtectedRoutes>
          } />


        {/* Add other routes here as needed */}
      </Routes>
    </UserProvider>
  )
}

export default App
