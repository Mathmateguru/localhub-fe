import { useParams } from 'react-router'
import PostCard, { type Post } from '../components/PostCard';
import CreatePostForm from '../components/CreatePostForm';
import { useState } from 'react';
import CommunityExtension from '../components/CommunityCardExtension/CommunityExtension';
import { useQuery } from '@tanstack/react-query';
import { getCommunity, getCommunityPosts } from '../services/community';


const Community = () => {
  const { communityId } = useParams();
  const [open, setOpen]= useState(false)

  const {data, isLoading} = useQuery({
    queryFn : () => getCommunity(communityId || ''),
    queryKey : ['community', communityId],
    enabled : !!communityId
  })

  const {data: postData, isLoading: isLoadingPost} = useQuery({
    queryFn : () => getCommunityPosts(communityId || ''),
    queryKey : ['post', communityId],
    enabled : !!communityId
  })

  if(isLoading || isLoadingPost){
   return <div>Loading...</div>
  }

  return (
    <>
      <main className='flex flex-col justify-center w-full max-w-4xl p-4 mx-auto my-6'>
          <CommunityExtension community={data.data} />
        <div className='flex gap-2 ' >
          <button  className='bg-black text-white py-2 px-4 font-bold rounded flex-1'>Join Community</button>
          <button className='bg-black text-white py-2 px-4 font-bold rounded' onClick={()=>setOpen(true)}> Create a post </button>
        </div>
        <div className='flex-1 p-4 border border-gray-100 h-full mt-3 space-y-5'>
          {postData?.data.data.map((item: Post, i: number) => <PostCard key={i} post={item} />)}
        </div>
      </main>
        <CreatePostForm isOpen={open} onClose={()=>setOpen(false)} communityId={communityId as string}/>
    </>
  )
}

export default Community;



