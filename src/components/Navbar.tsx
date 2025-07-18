import { Users } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useUserContext } from '../contexts/userContext';





const Navbar = () => {
const {isAuthenticated, updateAuthentication} = useUserContext();

  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("localhubToken");
    updateAuthentication(false);
    navigate('/signin');
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center ">
      <div className='flex items-center gap-2' onClick={() => navigate('/')}>

        <Users size={24} />
        <span className='font-semibold' >LocalHub</span>
      </div>

      {isAuthenticated ? 
      <div>
        <p className='text-cyan-600 font-medium'> Welcome bro</p> 
        <button onClick={handleSignOut}>Sign out</button></div> : 
      (<div className='flex gap-4'  >
        <button className='cursor-pointer' onClick={() => navigate('/signin')}>Sign In</button>
        <button
          onClick={() => navigate('/signup')}
          className='bg-black text-white rounded-[4px] px-4 py-2 cursor-pointer'>Sign Up</button>
      </div> )}
    </div>
  );
};

export default Navbar;
