import { Users} from 'lucide-react'
import { useNavigate } from 'react-router'





const Navbar = () => {
   

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center ">
     
    
<div className='flex items-center gap-2' onClick={() => navigate('/')}>



  <Users size={24} />
        <span className='font-semibold' >LocalHub</span>
      </div>

      <div className='flex gap-4'  >
        <button className='cursor-pointer' onClick={() => navigate('/signin')}>Sign In</button>
        <button
          onClick={() => navigate('/signup')}
          className='bg-black text-white rounded-[4px] px-4 py-2 cursor-pointer'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
