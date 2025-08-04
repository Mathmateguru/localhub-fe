import './Sidebar.css';
import { useNavigate, useLocation } from 'react-router'
import {  useEffect, useState } from 'react';
import { getCommunities } from '../../services/community';
import { useQuery } from '@tanstack/react-query';


function SideBar() {
  const navigate = useNavigate();
  // const location = useLocation();

const {data , isLoading} = useQuery({
  queryKey: ['community'],
  queryFn: getCommunities,
});


if(isLoading) {
  return <div>Fetching communities...</div>
}
const communities = data.data || [];
  return (
    <div className='bg-[#f6f3f4] w-[250px] h-screen'>
      <ul className='flex flex-col gap-2 p-3'>
       {communities.map((community) => (
        <li 
        className='cursor-pointer'
        key={community._id}  
        onClick={()=> navigate(`/feeds/${community._id}`)}
        >
          {community.name}
          </li>
       ))}
      </ul>
    </div>
  )
}

export default SideBar;
























