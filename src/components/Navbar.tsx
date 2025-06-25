import { Users } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center ">
      <div className='flex items-center gap-2'>
        <Users size={24} />
        <span className='font-semibold'>LocalHub</span>
      </div>

      <div className='flex gap-4'>
        <button className='cursor-pointer' >Sign In</button>
        <button className='bg-black text-white rounded-[4px] px-4 py-2 cursor-pointer'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
