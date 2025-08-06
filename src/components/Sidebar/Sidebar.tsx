import { useNavigate, useParams } from 'react-router'
import { getCommunities } from '../../services/community';
import { useQuery } from '@tanstack/react-query';


function SideBar() {
  const navigate = useNavigate();
  const { communityId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['community'],
    queryFn: getCommunities,
  });


  if (isLoading) {
    return <div>Fetching communities...</div>
  }
  const communities = data.data || [];

  return (
    <div className='bg-gray-100 w-[300px] '>
      <ul className='flex flex-col gap-2 p-3 py-8'>
        {communities.map((community) => (
          <li
            className={`cursor-pointer py-1 px-1 hover:bg-gray-300 ${community._id === communityId ? 'font-bold' : ''
              }`}
              key={community._id}
            onClick={() => navigate(`/feeds/${community._id}`)}
          >
            {community.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;
