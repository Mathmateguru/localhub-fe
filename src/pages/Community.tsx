import { useParams } from 'react-router'
import PostCard, { type Post } from '../components/PostCard';
import CreatePostForm from '../components/CreatePostForm';
import { useState } from 'react';
import CommunityExtension from '../components/CommunityCardExtension/CommunityExtension';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCommunity, getCommunityPosts, joinCommunity } from '../services/community';
import { toast } from 'react-toastify';


const Community = () => {
  const { communityId } = useParams();
  const [open, setOpen] = useState(false)

  const userDetails = localStorage.getItem('userDetails');
  const user = userDetails ? JSON.parse(userDetails) : null;


  const { data, isLoading } = useQuery({
    queryFn: () => getCommunity(communityId || ''),
    queryKey: ['community', communityId],
    enabled: !!communityId
  })

  const { data: postData, isLoading: isLoadingPost } = useQuery({
    queryFn: () => getCommunityPosts(communityId || ''),
    queryKey: ['post', communityId],
    enabled: !!communityId
  })

  const mutation = useMutation({
    mutationFn: () => joinCommunity(communityId as string),
    onSuccess: () => {
     toast.success('You have successfully joined the community')
    },
    onError: (error) => {
      toast.error('Failed to join the community');
      console.error('Error joining community:', error);
    }
  });

  if (isLoading || isLoadingPost || mutation.isPending) {
    return <div>Loading...</div>
  }

  
  if (!data || !data.data) {
    return <div className='text-center'>Community not found</div>
  }
  
  const belongsToCommunity = data.data?.members?.includes(user?._id) || false;


  return (
    <>
      <main className='flex flex-col justify-center w-full max-w-4xl p-4 mx-auto my-6'>
        <CommunityExtension community={data.data} />
        <div className='flex gap-2 ' >
          {belongsToCommunity ? (
            <button className='bg-black text-white py-2 px-4 font-bold rounded' onClick={() => setOpen(true)}>
              Create a post </button>
          )
            :
            <button className='bg-black text-white py-2 px-4 font-bold rounded flex-1' onClick={() => mutation.mutate()}>
              Join Community
            </button>
          }

        </div>
        <div className='flex-1 p-4 border border-gray-100 h-full mt-3 space-y-5'>
          {postData?.data.data.map((item: Post, i: number) => <PostCard key={i} post={item} />)}
        </div>
      </main>
      <CreatePostForm isOpen={open} onClose={() => setOpen(false)} communityId={communityId as string} />
    </>
  )
}

export default Community;



