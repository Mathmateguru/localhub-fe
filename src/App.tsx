import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Feeds from './pages/Feeds';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserProvider from './contexts/userContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Community from './pages/Community';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/feeds/:communityId" element={<Community />} />
          </Route>
          {/* Add other routes here as needed */}
        </Routes>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
