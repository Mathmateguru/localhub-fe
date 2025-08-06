import { Square, Users, MessageSquare } from 'lucide-react';

interface Community {
name: string
image: string
description: string
date: string
}

interface CommunityExtensionProps{
community: Community

}

const CommunityExtension = ({community}:CommunityExtensionProps) => {
  return (
    <div className=' h-full border-gray-100 border-[1px] mb-7 mt-7 rounded '>
      <div className='flex pt-7'>
        <p className='flex-1 pl-5 text-3xl font-medium'>{community.name}</p>
        <div className='flex pt-2.5'>
          <Square size={20} className='mt-1  text-cyan-400' />
          <p className='pr-6 pl-3 text-[18px] text-cyan-400'>Technology</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='h-80 w-[600px] my-6 rounded overflow-hidden'>
          <img src={community.image} alt='community banner' />
        </div>
      </div>
      <p className='px-5'>{community.description}</p>
      <div className='flex justify-between py-6'>
        <div className='flex justify-between pl-5'>
          <div className='flex'>
            <Users size={20} />
            <p className='pl-1.5'>1,250 members</p>
          </div>
          <div className='flex ml-6'>
            <MessageSquare size={20} className='mt-1' />
            <p className='pl-1.5'>89 posts</p>
          </div>
        </div>
        <p className='pr-6 text-gray-500'>Created {community.date}</p>
      </div>
    </div>
  )
}


export default CommunityExtension;