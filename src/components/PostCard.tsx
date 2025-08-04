import { User, Dot, Heart, MessageSquare } from 'lucide-react'


interface Post {
 name: string;
 dateCreated: string;
 title: string;
 content: string;
 likes: string[];
 comments: string[];
}

interface PostCardProps {
  post: Post
}

const PostCard = ({post}: PostCardProps) => {
  return (
    <div className="border border-[1px border-gray-100 h-[auto] px-5 py-6">
      <div className='flex gap-1 text-[14px] items-center'>
        <User size={18} />
        <span >{post.name}</span>
        <Dot className="text-[#71717A]" />
        <span className="text-[#71717A]">{post.dateCreated}</span>
      </div>
      <div className="mt-2 mb-3 font-semibold text-xl">{post.title}</div>
      <div className="text-[#71717A]">{post.content}</div>
      <div className='mt-4 flex gap-6'>
        <div className='flex items-center gap-1 text-[#71717A]'>
          <Heart size={18} />
          <span className="text-[#71717A] ml-1">{post.likes.length}</span>
        </div>
        <div className='flex items-center gap-1 text-[#71717A]'>
          <MessageSquare size={18} />
          <span className="text-[#71717A] ml-1">{post.comments.length}</span>
        </div>
      </div>
    </div>)
    ;
};

export default PostCard;
