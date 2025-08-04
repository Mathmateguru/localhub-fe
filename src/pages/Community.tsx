import { useParams } from 'react-router'
import SideBar from '../components/Sidebar/Sidebar';
import PostCard from '../components/PostCard';

const Community = () => {
    const { communityId } = useParams();

    return (
        <div className='flex space-x-4 '   >
            <SideBar />
            <div className='flex-1 p-4 border border-gray-100 h-full mt-3 space-y-5'>
                {fakePosts.map(item => <PostCard post ={item}/>)}
                
            </div>
        </div>
    )
}

export default Community;




const fakePosts = [
  {
    name: "John Doe",
    dateCreated: "2025-08-01T10:30:00Z",
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile language used for web development...",
    likes: ["alice", "bob", "charlie"],
    comments: ["Great post!", "Very helpful, thanks!", "Nice explanation."]
  },
  {
    name: "Alice Smith",
    dateCreated: "2025-08-02T09:15:00Z",
    title: "Understanding Async/Await",
    content: "Async/Await simplifies asynchronous programming in JavaScript...",
    likes: ["john", "emma"],
    comments: ["This cleared my doubts!", "Good examples provided."]
  },
  {
    name: "Bob Johnson",
    dateCreated: "2025-08-03T14:50:00Z",
    title: "Mastering React Hooks",
    content: "React Hooks allow you to use state and other features without classes...",
    likes: ["alice", "sarah", "john", "emma"],
    comments: ["Hooks are awesome!", "I learned a lot here."]
  },
  {
    name: "Emma Davis",
    dateCreated: "2025-08-04T08:20:00Z",
    title: "CSS Grid vs Flexbox",
    content: "Choosing between CSS Grid and Flexbox depends on your layout needs...",
    likes: ["bob", "sarah"],
    comments: ["Thanks for the comparison!", "Very useful for beginners."]
  },
  {
    name: "Sarah Lee",
    dateCreated: "2025-08-04T18:00:00Z",
    title: "Introduction to TypeScript",
    content: "TypeScript brings type safety to JavaScript, making large projects easier to manage...",
    likes: ["alice", "john", "emma"],
    comments: ["Good intro!", "Loved the examples.", "Very beginner-friendly."]
  }
];
